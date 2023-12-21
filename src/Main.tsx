import { useAccount, useBalance, useConnect, useContractRead, useDisconnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import "./generated"
import { useErc20Approve, useErc20BalanceOf, useErc721BalanceOf, useErc721OwnerOf, useErc721SetApprovalForAll, useMockErc721Read, useTestErc721Mint, useTokenizedVickeryAuctionAuctions, useTokenizedVickeryAuctionBids, useTokenizedVickeryAuctionCommitBid, useTokenizedVickeryAuctionCreateAuction, useTokenizedVickeryAuctionEndAuction, useTokenizedVickeryAuctionGetAuction, useTokenizedVickeryAuctionRead, useTokenizedVickeryAuctionRevealBid } from './generated'
import contracts from './tokenConfig.json'
import React, { useEffect, useState } from 'react'
import { encodePacked, keccak256, slice, encodeAbiParameters, parseAbiParameters } from 'viem'
import './Main.css';

export default function Main() {
    const [contactsData, setContractsData] = React.useState(contracts)
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { data: balance, isError, isLoading } = useBalance({
        address
    })
    const { disconnect } = useDisconnect()

    const auctionAddress = "0x8Aaf03081FB55f480017aAc5A94723ccAc14E190"
    const [nftAddress, setNFTAddress] = useState("737BE1f09742664b859Fe095a8de7DdF890fe079")
    const [tokenAddress, setTokenAddress] = useState("7398D77B30300354f34Dc9EDA153998a63cF0087")
    const [auctionId, setAuctionId] = useState(2)
    const [startTime, setStartTime] = useState(0)
    const [bidPeriod, setBidPeriod] = useState(0)
    const [revealPeriod, setRevealPeriod] = useState(0)
    const [reservePrice, setReservePrice] = useState(BigInt(0))
    const [bidValue, setBidValue] = useState(BigInt(0))
    const [isOpen, setIsOpen] = useState(false)
    const nonce = "0x8Aaf03081FB55f480017aAc5A94723ccAc14E190000000000000000000000000"

    const { data: auction } = useTokenizedVickeryAuctionGetAuction(
        {
            address: auctionAddress,
            args: [
                `0x${nftAddress}`,
                BigInt(auctionId)
            ]
        }
    )

    const { data: ownerofNFT } = useErc721OwnerOf(
        {
            address: `0x${nftAddress}`,
            args: [
                BigInt(auctionId),
            ]
        }
    )

    const { data: bid } = useTokenizedVickeryAuctionBids(
        {
            address: auctionAddress,
            args: [
                `0x${nftAddress}`,
                BigInt(auctionId),
                auction?.index ?? BigInt(0),
                address!
            ]
        }
    )

    const { write: endAuction, isError: endAuctionisError, error: endAuctionError } = useTokenizedVickeryAuctionEndAuction(
        {
            address: auctionAddress,
            functionName: "endAuction",
            args: [
                `0x${nftAddress}`,
                BigInt(auctionId)
            ]
        }
    )

    const { write: revealBid, isError: revealBidisError, error: revealBidError } = useTokenizedVickeryAuctionRevealBid(
        {
            address: auctionAddress,
            functionName: "revealBid",
            args: [
                `0x${nftAddress}`,
                BigInt(auctionId),
                bidValue,
                nonce
            ]
        }
    )

    const commitment = slice(
        keccak256(encodeAbiParameters(
            parseAbiParameters('bytes32 nonce, uint96 bidValue, address tokenContract, uint256 auctionId, uint64 auctionIndex'),
            [
                nonce,//nonce
                bidValue,//bidValue
                `0x${nftAddress}`,//tokenContract
                BigInt(auctionId),//auctionId
                auction?.index ?? BigInt(0),//auctionIndex
            ])
        ), 0, 20
    )

    const handleNFTAddressChange = (event: { target: { value: any } }) => {
        setNFTAddress(event.target.value);
    };

    const handleTokenAddressChange = (event: { target: { value: any } }) => {
        setTokenAddress(event.target.value);
    }

    const { data: createAuctionData, write: createAuction, isError: createAuctionisError, error: createAuctionError } = useTokenizedVickeryAuctionCreateAuction(
        {
            address: auctionAddress,
            functionName: "createAuction",
            args: [
                `0x${nftAddress}`,
                BigInt(auctionId),
                `0x${tokenAddress}`,
                startTime,
                bidPeriod,
                revealPeriod,
                reservePrice
            ]
        }
    )

    const { data: commitBidData, write: commitBid, isError: commitBidisError, error: commitError } = useTokenizedVickeryAuctionCommitBid(
        {
            address: auctionAddress,
            functionName: "commitBid",
            args: [
                `0x${nftAddress}`,
                BigInt(auctionId),
                commitment,//TODO: change to commitment
                bidValue
            ]
        }
    )

    const { data: balanceOfNFT } = useErc721BalanceOf(
        {
            address: `0x${nftAddress}`,
            args: [
                address!,
            ]
        }
    )

    const { data: balanceOfToken } = useErc20BalanceOf(
        {
            address: `0x${tokenAddress}`,
            args: [
                address!,
            ]
        }
    )

    const { write: ntfApproval, error: ERC721ApprovalError, isError: isERC721ApprovalError } = useErc721SetApprovalForAll(
        {
            address: `0x${nftAddress}`,
            functionName: "setApprovalForAll",
            args: [
                auctionAddress,
                true
            ]
        }
    )

    const { write: tokenApproval, error: ERC20ApprovalError, isError: isERC20ApprovalError } = useErc20Approve(
        {
            address: `0x${tokenAddress}`,
            functionName: "approve",
            args: [
                auctionAddress,
                BigInt(1000)
            ]
        }
    )

    const { write: mintNFT, isError: isMintError, error: mintError } = useTestErc721Mint(
        {
            address: `0x${nftAddress}`,
            functionName: "mint",
            args: [
                address!,
                BigInt(auctionId)
            ]
        }
    )

    return (
        <div className="App">
            <h1>
                Vickery Auction
            </h1>

            <div>
                {
                    isConnected ?
                        <button onClick={() => disconnect()}>Disconnect</button> :
                        <button
                            onClick={() => connect()}>
                            Connect Wallet
                        </button>
                }
                {
                    isConnected ?
                        <div>Connected to: {ensName ?? address}</div> :
                        <div>Not connected</div>
                }
                {
                    !isLoading && !isError &&
                    <div>Balance of ETH: {balance?.formatted} {balance?.symbol}</div>
                }
                {
                    !isLoading && !isError &&
                    <div>Balance of NFT({`0x${nftAddress}`}): {balanceOfNFT?.toString()}</div>
                }
                {
                    !isLoading && !isError &&
                    <div>Balance of Token({`0x${tokenAddress}`}): {balanceOfToken?.toLocaleString()}</div>
                }
                <br />
                <div>
                    Create Auction
                    <div>
                        NFTs:
                        <select onChange={handleNFTAddressChange}>
                            {contactsData && contactsData.erc721Contracts.map((contract, index) => {
                                return (
                                    <option>{contract.contractAddress}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        ERC20 Tokens:
                        <select onChange={handleTokenAddressChange}>
                            {contactsData && contactsData.erc20Contracts.map((contract, index) => {
                                return (
                                    <option>{contract.contractAddress}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        NFT ID: <input type="number" min="0"
                            onChange={(e) => e.target.value.length == 0 ? setAuctionId(0) : setAuctionId(parseInt(e.target.value))} />
                    </div>
                    <div>
                        Start Time:
                        <input type="datetime-local" onChange={
                            (e) => {
                                const date = new Date(e.target.value).getTime() / 1000
                                setStartTime(date)
                            }
                        } />
                        {startTime}
                    </div>
                    <div>
                        Bid Period: (in minutes)
                        <input type="number" min="0"
                            onChange={(e) => e.target.value.length == 0 ? setBidPeriod(0) : setBidPeriod(parseInt(e.target.value) * 60)} />
                    </div>
                    <div>
                        Reveal Period: (in minutes)
                        <input type="number" min="0"
                            onChange={(e) => e.target.value.length == 0 ? setRevealPeriod(0) : setRevealPeriod(parseInt(e.target.value) * 60)} />
                    </div>
                    <div>
                        Reserve Price:
                        <input type="number" min="0"
                            onChange={(e) => e.target.value.length == 0 ? setReservePrice(BigInt(0)) : setReservePrice(BigInt(e.target.value))} />
                    </div>
                    <div>
                        <button onClick={() => mintNFT()}>mint NFT</button>
                        <button onClick={() => {
                            tokenApproval()
                            ntfApproval()
                        }}>
                            approve transaction
                        </button>
                        <button onClick={() => createAuction()}>create auction</button>
                    </div>
                    <div>
                        number of auctions: {auction?.index.toString()}
                    </div>
                </div>

                <br />
                <div>
                    {
                        isConnected &&

                        <div>
                            <table className="center">
                                <tr>
                                    <th>NFT ID</th>
                                    <th>Biding Status</th>
                                    <th>Start Time</th>
                                    <th>Submit Bid</th>
                                    <th>Number of Bids Submitted</th>
                                    <th>Time Left</th>
                                </tr>
                                {
                                    auction?.seller === "0x0000000000000000000000000000000000000000" ? "No Auctions" :
                                        <tr>
                                            <td>{auctionId}</td>
                                            <td>{auction?.endOfBiddingPeriod! < Date.now() / 1000 ? "Closed" : "Open"}</td>
                                            <td>{auction?.startTime}</td>
                                            <td>
                                                {
                                                    auction?.endOfBiddingPeriod! > Date.now() / 1000 ?
                                                        <button onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                                                            Bid
                                                        </button> :
                                                        "End of Biding Period"
                                                }
                                                {isOpen && auction?.endOfBiddingPeriod! > Date.now() / 1000 && (
                                                    <div>
                                                        <input type="number" min="0"
                                                            onChange={(e) => e.target.value.length == 0 ? setBidValue(BigInt(0)) : setBidValue(BigInt(e.target.value))} />
                                                        <button onClick={() => {
                                                            commitBid()
                                                            setIsOpen(false)
                                                        }}>
                                                            Bid
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                            <td>{auction?.numUnrevealedBids.toString()}</td>
                                            <td>{(auction?.endOfBiddingPeriod! - Date.now() / 1000) / (60)} mins</td>
                                            <td>
                                                {
                                                    auction?.endOfRevealPeriod! > Date.now() / 1000 ? "Reveal Period Not Over" :
                                                        ownerofNFT === auctionAddress &&
                                                        <button onClick={() => endAuction()}>
                                                            End Auction
                                                        </button>
                                                }
                                            </td>
                                        </tr>
                                }
                            </table>
                            <div>{bid?.[0] == "0x0000000000000000000000000000000000000000" ?
                                "No Bids to Reveal" :
                                auction?.endOfBiddingPeriod! > Date.now() / 1000 ? 
                                "Biding Period Not Over":
                                <div>
                                    commitment: {bid?.[0]}
                                    collateral: {bid?.[1].toString()}
                                    <button onClick={() => {
                                        setBidValue(bid?.[1]!)
                                        revealBid()
                                    }
                                    }>
                                        Reveal
                                    </button>
                                </div>}
                            </div>
                        </div>
                    }
                </div>
                <br />

                <div>
                    Error Messages
                    <div>
                        isMintError: {isMintError ? mintError?.message : "false"}
                    </div>
                    <div>
                        createAuctionisError: {createAuctionisError ? createAuctionError?.message : "false"}
                    </div>
                    <div>
                        isERC721ApprovalError: {isERC721ApprovalError ? ERC721ApprovalError?.message : "false"}
                    </div>
                    <div>
                        isERC20ApprovalError: {isERC20ApprovalError ? ERC20ApprovalError?.message : "false"}
                    </div>
                    <div>
                        commitBidisError: {commitBidisError ? commitError?.message : "false"}
                    </div>
                    <div>
                        endAuctionisError: {endAuctionisError ? endAuctionError?.message : "false"}
                    </div>
                    <div>
                        revealBidisError: {revealBidisError ? revealBidError?.message : "false"}
                    </div>
                </div>
            </div>
        </div>
    );
}
