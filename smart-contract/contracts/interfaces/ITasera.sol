// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9 <0.9.0;
pragma experimental ABIEncoderV2;

interface ITasera {
    function estimateMaxSwapUniswapV3(
        address _fromToken,
        address _toToken,
        uint256 _amount,
        uint24 _poolFee
    ) external view returns (uint256);

    function estimateMinSwapUniswapV3(
        address _fromToken,
        address _toToken,
        uint256 _amount,
        uint24 _poolFee
    ) external view returns (uint256);
}
