import { Prisma, PrismaClient } from "zapier-database";
import { ZapCreateSchema } from "../types";

export async function createZap(req, res) {
    try {
        const id = req.id as string;
        const body = req.body;
        const parsedData = ZapCreateSchema.parse(body);

        if (!parsedData) {
            res.status(400).json({ message: "Invalid data" });
            return;
        }

        await PrismaClient.$transaction(async (tx) => {

            const zap = await PrismaClient.zap.create({
                data: {
                    userId: parseInt(id),
                    trigger: "",
                    actions: {
                        create: parsedData.actionId.map((action, index) => ({
                            triggerId: action.availableActionId,
                            type: index
                        })),

                    }
                }
            })
          const trigger=   await tx.trigger.create({
                data: {
                    triggerId: parsedData.data.availableTriggerId,
                    zapId : zap.id

                }
            });

            await PrismaClient.zap.update({
                where: { id: zap.id },
                data: {
                    triggerId: trigger.id
                }
            })
        })



            return res.status(200).json({ message: "Zap created successfully" });

        } catch (
        error
        ) {
            res.status(500).json({ message: error.message });
            return;

        }


    }




    export async function getAllZaps(req, res) {
    try {
        const zaps = await PrismaClient.zap.findMany({
            where:{
                userId: req.id
            },
            include:{
                actions:{
                    include:{
                        type:true
                    }
                }
            }
        });
        
        return res.status(200).json(zaps);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    }


export async function getZapById(req, res) {
    try {
        const id = req.id;
        const zapId = parseInt(req.params.zapId);
        const zap = await PrismaClient.zap.findFirst({
            where: { id: zapId,
                userId: id
             },
            include: {
                actions:{
                    include:{
                        type:true
                    }
                }
            },
            trigger: {
                include: {
                 type:true
                }
            }
        });

        if (!zap) {
            return res.status(404).json({ message: "Zap not found" });
        }

        return res.status(200).json(zap);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}