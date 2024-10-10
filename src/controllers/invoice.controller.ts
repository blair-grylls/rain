import { Request, Response } from "express";
import * as invoiceService from "../services/invoice.service";

export const getInvoices = async (req: Request, res: Response) => {
  const { userId } = req.query;

  const invoices = await invoiceService.getInvoicesByUserId(Number(userId));

  if (!invoices) {
    res.status(404).json({ error: "Example not found." });
  } else {
    res.status(200).json(invoices);
  }
};

export const editInvoiceByInvoiceId = async (req: Request, res: Response) => {
  const { updatedInvoice } = req.body;
  const { invoiceId } = req.query;

  const invoice = await invoiceService.editInvoiceByInvoiceId(
    Number(invoiceId),
    updatedInvoice as any as invoiceService.Invoice
  );

  res.status(201).json(invoice);
};
