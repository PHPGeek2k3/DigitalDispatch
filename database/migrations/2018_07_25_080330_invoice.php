<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Invoice extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schemsa::create('Invoice' function (Blueprint $table) {
            $table->int('id')->auto_increment,
            $table->unsingedInteger('account_id');
            $table->timestamp('due_at');
            $table->timestamp('sent_at');
            $table->float('total_ammount' 8,2);
            $table->float('outstanding' 8,2);
            $table->boolean('paid_in_full');
            $table->foriegn('account_id')->references('id')->on('Accounts')->onDelete('cascade');
            $table->timestamps();
            $table->primary('id');
            $table->index('account_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema:dropIfExists('Invoice');
    }
}
