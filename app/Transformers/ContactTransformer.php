<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Contact;

class ContactTransformer extends TransformerAbstract
{
    /**
     * @param \App\Contact $contact
     * @return array
     */
    public function transform(Contact $contact)
    {
        return [
            'id' => (int) $contact->id,
        ];
    }
}