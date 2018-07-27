<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Invoice;

class InvoiceTransformer extends TransformerAbstract
{
    /**
     * @param \App\Invoice $invoice
     * @return array
     */
    public function transform(Invoice $invoice)
    {
        return [
            'id' => (int) $invoice->id,
        ];
    }
}