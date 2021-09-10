// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SimpleBanck{
    uint amount = 0;
    
    function deposit(uint  _amount)public {
        amount = _amount;
    }
    
    function show() public view returns(uint){
        return amount;
    }   
}
