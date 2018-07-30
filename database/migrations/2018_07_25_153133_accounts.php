<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Accounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table)) {
            $table->increments('id')->not_null;
            $table->string('name');
            $table->float('balance')->nullable();
            $table->integer('acount_type')->references('id')->on('account_types');
            $table->string('billing_cycle')->nullable();
            $table->integer('user_id')->references('id')->on('users')->onUpdate('cascade');
            $table->integer('primary_contact')->nullable();
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
        Schema:dropIfExists('accounts');
    }
}
