<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AuctionVehicles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auction-vehicles', Blueprint $table) {
            $table->increments('id');
            $table->integer('vehicle_id');
            $table->float('current_price');
            $table->float('opening_bid');
            $table->integer('auction_id');
            $table->string('status');
            $table->timestamps();
    }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auction_vehicles');
    }
}
