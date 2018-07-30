<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Auctions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auctions', Blueprint $table)
        {
            $table->increments('id');
            $table->datetime('auction_date');
            $table->integer('auction_type');
            $table->integer('auction_location');
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
        Schema::dropIfExists('auctions');
    }
}
