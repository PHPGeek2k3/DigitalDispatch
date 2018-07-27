<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Zone;

class ZoneTransformer extends TransformerAbstract
{
    /**
     * @param \App\Zone $zone
     * @return array
     */
    public function transform(Zone $zone)
    {
        return [
            'id' => (int) $zone->id,
        ];
    }
}