<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agendas', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->text("description");
            $table->dateTime('start');
            $table->dateTime('end');
            $table->string('color');
            $table->unsignedInteger('asigned_by');
            $table->foreign('asigned_by')->references('id')->on('users');
            $table->unsignedInteger('asigned_to');
            $table->foreign('asigned_to')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agendas');
    }
};
