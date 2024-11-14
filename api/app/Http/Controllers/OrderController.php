<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderCollection;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $orders = Order::paginate();
        $orders = Order::all();

        return new OrderCollection($orders);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        //
        try {
            $request->validated();

            $data = $request->all();
            $items = $data['items'];

            // total
            $total = 0;
            foreach ($data['items'] as $item) {
                $total += $item['price'] * $item['quantity'];
            }

            $data['total'] = $total;

            $data = Order::create($data);

            if ($data === null) {
                throw new \Exception('Error creating order');
            }

            $newId = Order::latest()->first()->id;

            foreach ($items as $item) {

                $item['total'] = $item['price'] * $item['quantity'];
                $item['order_id'] = $newId;

                $dataItem = OrderItem::create($item);

                if ($dataItem === null) {
                    throw new \Exception('Error creating order item');
                }
            }

            $newOrder = Order::find($newId);
            $data = new OrderResource($newOrder);

            return response()->json(['data' => $data], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //

        $order = Order::find($order->id);

        return new OrderResource($order);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        try {
            $request->validated();

            $data = $request->all();

            $order = Order::find($order->id);

            if ($order === null) {
                throw new \Exception('Order not found');
            }

            unset($data['uuid']);

            $order->update($data);

            $order = Order::find($order->id);

            return new OrderResource($order);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
        try {
            $order = Order::find($order->id);

            if ($order === null) {
                throw new \Exception('Order not found');
            }

            // cacelar
            $order->status = 'cancelled';
            $order->save();

            return response()->json(['data' => 'Order deleted'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
