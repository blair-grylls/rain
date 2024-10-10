import { Router } from "express";
import { getInvoices } from "../controllers/invoice.controller";
import { editInvoiceByInvoiceId } from "../services/invoice.service";

const invoiceRouter = Router();

invoiceRouter.get("/", getInvoices);
invoiceRouter.post("/", editInvoiceByInvoiceId);

export { invoiceRouter };
