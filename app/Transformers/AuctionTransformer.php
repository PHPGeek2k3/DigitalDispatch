<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Auction;
use App\AuctionVehciles;
use App\AuctionBids;
use App\User;

class AuctionTransformer extends TransformerAbstract
{
    use Auction, AuctionBids, User;
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