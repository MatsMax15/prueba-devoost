<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // generar id unico
        $id = $this->faker->unique()->randomNumber(8);

        return [

            'id' => $id,
            'uuid' => $this->faker->uuid(),
            'client_id' => Client::factory(),
            'total' => $this->faker->randomFloat(2, 150, 600),
            'status' => $this->faker->randomElement(['pending', 'completed', 'cancelled']),
            'completed_at' => $this->faker->dateTimeThisYear(),
            'cancelled_at' => $this->faker->dateTimeThisYear(),
            'created_by' => User::factory(),

        ];
    }
}
