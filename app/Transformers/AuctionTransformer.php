<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Auction;
use App\AuctionVehciles;
use App\AuctionBids;


class AuctionTransformer extends TransformerAbstract
{
    /**
     * @param \App\Auction $auction
     * @return array
     */
    public function transform(Auction $auction)
    {
        return [
            'id' => (int) $auction->id,
        ];
    }
}