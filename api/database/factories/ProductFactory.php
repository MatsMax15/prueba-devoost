<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $idImg = $this->faker->numberBetween(1, 100);

        return [

            'uuid' => $this->faker->uuid(),
            'name' => $this->faker->name(),
            'description' => $this->faker->text(),
            'price' => $this->faker->numberBetween(10, 300),
            'stock' => $this->faker->numberBetween(1, 100),
            'image' => 'https://picsum.photos/id/' . $idImg . '/200/300',

        ];
    }
}
