<?php

namespace App\Models;

use App\Enums\ProjectStatusEnum;
use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    /** @use HasFactory<\Database\Factories\OrderFactory> */
    use HasFactory;
    use Uuid;

    protected $fillable = [
        'uuid',
        'client_id',
        'total',
        'status',
        'completed_at',
        'cancelled_at',
        'created_by',
        'updated_by',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = ['status' => ProjectStatusEnum::class];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id')->select('id', 'name', 'email', 'phone');
    }

    public function listItems()
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }

    public function createItems(array $items)
    {
        $this->items()->createMany($items);
    }

    /**
     * Get all of the items for the Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }
}
