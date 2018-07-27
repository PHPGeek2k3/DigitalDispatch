<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Expense;

class ExpenseTransformer extends TransformerAbstract
{
    /**
     * @param \App\Expense $expense
     * @return array
     */
    public function transform(Expense $expense)
    {
        return [
            'id' => (int) $expense->id,
        ];
    }
}