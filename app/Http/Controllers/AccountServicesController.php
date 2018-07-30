<?php

namespace App\Http\Controllers;

use App\AccountServices;
use App\Accounts;
use App\Serices;
use App\ServiceRequestTypes as Types;
use Illuminate\Http\Request;

class AccountServicesController extends Controller
{
    protected $valid
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $acountId = $request->account_id;
        $services = App\AccountServices->get()->where('account_id' '=>' $account->id);

        return view('accounts.services', compact($acountId, $services));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $services = Services->get()->where('active' '1');
        $types = Types->get()->where('active' '1');
        return view('accounts.new-service', conpact($services, $types));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\account_services  $account_services
     * @return \Illuminate\Http\Response
     */
    public function show(AccountServices $services)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\account_services  $account_services
     * @return \Illuminate\Http\Response
     */
    public function edit(AccountServices $services)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\account_services  $account_services
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, account_services $account_services)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\account_services  $account_services
     * @return \Illuminate\Http\Response
     */
    public function destroy(AccountServices $account_services)
    {
        //
    }
}
