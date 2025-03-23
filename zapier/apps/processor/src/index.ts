import { prisma } from 'zapier-database';
import { Kafka } from 'kafkajs';
import * as dotenv from 'dotenv';
import { TOPIC_NAME } from 'zapier-config';
// Load environment variables
dotenv.config();

const client = prisma;

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || 'zapier-processor',
  brokers: [process.env.KAFKA_BROKER_URL || 'localhost:29092']
});

const producer = kafka.producer();

async function main() {
  console.log('Processor service starting...');

  // Connect to Kafka
  await producer.connect();
  console.log('Connected to Kafka');

  try {
    while (true) {
      // Find pending outbox messages
      const pendingRows = await client.zapRunOutbox.findMany({
        where: {

        },
        take: 10,

      });

      if (pendingRows.length === 0) {
        console.log('No pending messages, waiting...');
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
        continue;
      }

      console.log(`Processing ${pendingRows.length} outbox messages`);

      // Process each row
      for (const row of pendingRows) {
        try {
          // Send to Kafka
          await producer.send({
            topic: TOPIC_NAME,
            messages: [
              pendingRows.map((r

              ) => ({

                return{

                  value: r.zapRunId,
                }

              }))
            ]


          });

          // Mark as processed
          await client.zapRunOutbox.updateMany({
            where: { 
              id: { 
                in: pendingRows.map(row => row.id) 
              } 
            },
            data: {
              processed: true,
              processedAt: new Date()
            }
          });

          console.log(`Successfully processed message ${row.id}`);
        } catch (error) {
          console.error(`Error processing message ${row.id}:`, error);


        }
      }

      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error('Fatal error in processor:', error);
    await producer.disconnect();
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('Gracefully shutting down...');
  await producer.disconnect();
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Gracefully shutting down...');
  await producer.disconnect();
  await prisma.$disconnect();
  process.exit(0);
});

// Start the processor
main().catch(async (e) => {
  console.error('Fatal error:', e);
  await producer.disconnect();
  await prisma.$disconnect();
  process.exit(1);
});