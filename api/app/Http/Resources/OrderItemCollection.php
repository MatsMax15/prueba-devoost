<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderItemCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->transform(function ($orderItem) {
            return [
                'id' => $orderItem->id,
                'uuid' => $orderItem->uuid,
                'order_id' => $orderItem->order_id,
                'product' => $orderItem->product,
                'quantity' => $orderItem->quantity,
                'price' => $orderItem->price,
                'total' => $orderItem->total,
            ];
        })->toArray();
    }
}
