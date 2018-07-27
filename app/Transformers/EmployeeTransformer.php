<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Employee;

class EmployeeTransformer extends TransformerAbstract
{
    /**
     * @param \App\Employee $employee
     * @return array
     */
    public function transform(Employee $employee)
    {
        return [
            'id' => (int) $employee->id,
        ];
    }
}