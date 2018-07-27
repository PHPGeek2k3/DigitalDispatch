<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\AuctionVehicles;

class AuctionVehiclesTransformer extends TransformerAbstract
{
    /**
     * @param \App\AuctionVehicles $auctionVehicles
     * @return array
     */
    public function transform(AuctionVehicles $auctionVehicles)
    {
        return [
            'id' => (int) $auctionVehicles->id,
        ];
    }
}