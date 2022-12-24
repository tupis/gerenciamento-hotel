import { Request as req, Response as res } from "express";
import prisma from "../utils/prisma";

export const ReservaController = {
  listAll: async (req: req, res: res) => {
    try {
      const allHotels = await prisma.tb_reservas.findMany();

      res.send(allHotels);
    } catch (error) {}
  },
  search: async (req: req, res: res) => {
    const { id } = req.params;
    if (id === undefined || id === null) {
      throw new Error("Por favor insira uma reserva válida");
    }

    try {
      const findHotel = await prisma.tb_reservas.findUnique({
        where: {
          id: Number(id),
        },
      });

      res.send(findHotel);
    } catch (error) {
      res.send("Erro ao achar o hotel");
    }
  },
  create: async (req: req, res: res) => {
    try {
      const newHotel = await prisma.tb_reservas.create({
        data: {
          ...req.body,
        },
      });

      res.send(newHotel);
    } catch (error) {
      res.send("Erro ao criar hotel");
    }
  },
  update: async (req: req, res: res) => {
    const { id } = req.params;
    if (id === undefined || id === null) {
      throw new Error("Por favor insira uma reserva válida");
    }

    try {
      const updateHotel = await prisma.tb_reservas.update({
        where: {
          id: Number(id),
        },

        data: {
          ...req.body,
        },
      });

      res.send(updateHotel);
    } catch (error) {
      res.send("Error ao atualizar hotel");
    }
  },
};
