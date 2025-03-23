
import { Kafka } from "kafkajs"
import { prisma } from 'zapier-database';
import { TOPIC_NAME } from 'zapier-config';


const kafka = new Kafka({
  clientId: 'outbox-processor',
  brokers: ['localhost:29092']
});

async function main() {
    const consumer = kafka.consumer({
        groupId: 'main-worker'
    })

    await consumer.connect()
    await consumer.subscribe({
        topic: TOPIC_NAME,
        fromBeginning: true
    })

    await consumer.run({
        autoCommit: false,
        eachMessage : async({ topic, partition, message }) => {
            console.log({
                topic,
                partition,
                
                offset: (parseInt(message.offset) +1).toString(), 
            })

                await new Promise(r => setTimeout(r, 1000))

            
            await consumer.commitOffsets([{
                topic: TOPIC_NAME,
                partition: partition,
                offset: message.offset //5
            }])


    }, 
})


    
}

main()