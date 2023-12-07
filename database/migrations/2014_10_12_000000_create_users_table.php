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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rut')->unique();
            $table->string('nombre');
            $table->string('apePat');
            $table->string('apeMat')->nullable();
            $table->string('telefono');
            $table->date('fechaNac')->nullable();
            $table->enum('genero', ['Femenino', 'Masculino', 'na'])->nullable();
            $table->string('direccion');
            $table->date('fechaIngreso')->nullable();
            $table->date('fechaSalida')->nullable();
            $table->string('salario')->nullable();
            $table->string('imagen')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
