<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AccountSlas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('AccountSlas', function (Blueprint $table) {
            $table->int('id')->autoincrement;
            $table->string('name', 50);
            $table->('starts_at');
            $table->('ends_at');
            $table->int('allowed_time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('AccountSlas');
    }
}
