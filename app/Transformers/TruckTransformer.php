<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Truck;

class TruckTransformer extends TransformerAbstract
{
    /**
     * @param \App\Truck $truck
     * @return array
     */
    public function transform(Truck $truck)
    {
        return [
            'id' => (int) $truck->id,
        ];
    }
}