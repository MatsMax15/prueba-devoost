<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $fecha = date('d-m-Y', strtotime($this->created_at));

        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'status' => $this->status->value,
            'total' => $this->total,
            'created_at' => $fecha,
            'client' => $this->client,
            'items' => $this->listItems,
        ];
    }
}
