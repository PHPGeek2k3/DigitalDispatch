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
            $talble->timestamp('created_at')
            $table->unsingedInteger('account_id')
            $table->timestamp('due_at')
            $table->float('total_ammount')
            $table->string('status')
            $table->timestamp('updated_at')
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
