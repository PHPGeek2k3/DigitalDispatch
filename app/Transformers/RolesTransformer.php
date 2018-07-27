<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Roles;

class RolesTransformer extends TransformerAbstract
{
    /**
     * @param \App\Roles $roles
     * @return array
     */
    public function transform(Roles $roles)
    {
        return [
            'id' => (int) $roles->id,
        ];
    }
}