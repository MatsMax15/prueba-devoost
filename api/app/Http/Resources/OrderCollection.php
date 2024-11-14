<?php

namespace App\Http\Resources;

use App\Enums\ProjectStatusEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return date in format d-m-Y

        return $this->collection->transform(function ($order) {
            $fecha = date('Y-m-d', strtotime($order->created_at));

            return [
                'id' => $order->id,
                'uuid' => $order->uuid,
                'status' => $order->status->value,
                'total' => $order->total,
                'total_items' => $order->listItems->count(),
                'client' => $order->client,
                'created_at' => $fecha,
            ];
        })->toArray();
    }
}
