<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Vendor;

class VendorTransformer extends TransformerAbstract
{
    /**
     * @param \App\Vendor $vendor
     * @return array
     */
    public function transform(Vendor $vendor)
    {
        return [
            'id' => (int) $vendor->id,
        ];
    }
}