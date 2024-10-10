import { Router } from "express";
import { exampleRouter } from "./example.routes";
import { invoiceRouter } from "./invoice.routes";

const router = Router();

router.use("/example", exampleRouter);
router.use("/invoices", invoiceRouter);

export { router };
