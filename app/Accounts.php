<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Contacts;
use App\ServiceRequests;
use App\AccountServices;
use App\AccountSlas;


class Accounts extends Model
{
    public function contacts()
    {
        $this->hasMany(App\Contacts);
    }

    public function services()
    {
        $this->hasMany(App\AccountServices);
    }

    public function slas()
    {
        $this->hasMany(App\Slas);
    }

    public function service_requests()
    {
        $this->hasMany(App\ServiceRequests)->orderBy('eta', 'DSC');
    }

    public function default_services()
    {
        $this->hasMany(App\AccountServices)->where('is_default', '==', '1');
    }
}
