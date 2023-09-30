import styles from './index.module.css';
import { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';
import dynamic from 'next/dynamic'



const CreateArtwork = () => {

	const [token, setToken] = useState(0.8);
	const [coin, setCoin] = useState(1500);


    const collectReward = () => {
        // You can add logic here to calculate and assign rewards
        setToken(token + (coin/1000));
		setCoin(0)
      };

  	return (
    		<div className={styles.createArtwork}>
      			<div className={styles.createArtworkChild} />
      			<div className={styles.tetrasolanaAllRights}>© 2023 TetraSOlana. All rights reserved.</div>
      			<div className={styles.header}>
        				<div className={styles.marketplaceParent}>
						<Link href='/MarketPlace'>
						<div className={styles.conectWallet}>Marketplace</div>
						</Link>
						<Link href='/Tetris'>                          
						<div className={styles.conectWallet}>Game</div>
						</Link>
						<Link href='/'>
						<div className={styles.conectWallet}>FAQ</div>
						</Link>
							  <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          						<WalletMultiButton />
        					</div>          					
        				</div>
        				<Link href='/'>
						<b className={styles.tetrasolana}>
          					<span>Tetra</span>
          					<span className={styles.so}>SO</span>
          					<span>lana</span>
        				</b>
						</Link>
        				<div className={styles.search}>
          					<div className={styles.searchChild} />
          					<div className={styles.searchParent}>
            						<img className={styles.searchIcon1} alt="" src="/image/search.svg" />
            						<div className={styles.game}>Search items and collections</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.footer}>
        				<div className={styles.aboutParent}>
          					<b className={styles.about}>About</b>
          					<div className={styles.product}>Product</div>
          					<div className={styles.resource}>Resource</div>
          					<div className={styles.termCondition1}>{`Term & Condition`}</div>
          					<div className={styles.faq1}>FAQ</div>
        				</div>
        				<div className={styles.theBestNftMarketplaceWebsiParent}>
          					<div className={styles.theBestNft}>The best NFT marketplace website in the world and feel your experience in selling or buy our work.</div>
          					<b className={styles.tetrasolana1}>
            						<span>Tetra</span>
            						<span className={styles.so}>SO</span>
            						<span>lana</span>
          					</b>
        				</div>
        				<div className={styles.contactParent}>
          					<b className={styles.contact}>Contact</b>
          					<div className={styles.div}>+012 3456789</div>
          					<div className={styles.tetrasolanagmailcom}>tetrasolana@gmail.com</div>
          					<div className={styles.youtubeParent}>
							  <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/youtube.svg" />
																																</Link>
																																<Link href='https://discord.gg/DwkKuhgg'>
																																<img className={styles.youtubeIcon1} alt="" src="/image/discord.svg" />
																																</Link>
																																<Link href='https://www.youtube.com/watch?v=Wjavakm7gMQ'>
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/instagram.svg" />
																																</Link>
          					</div>
        				</div>
      			</div>
      			<div className={styles.createArtworkItem} />
      			<div className={styles.ellipseParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.groupItem} />
      			</div>
      			<div className={styles.ellipseParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.groupItem} />
      			</div>
      			<div className={styles.cardClickParent}>
        				<div className={styles.cardClick1} />
        				<div className={styles.profilePictureParent}>
          					<img className={styles.profilePictureIcon} alt=""  src="/image/Profile Picture.svg"  />
          					<div className={styles.groupParent}>
            						<div className={styles.frameParent}>
              							<div className={styles.vanDarkholmeWrapper}>
                								<b className={styles.marketplace}>Van Darkholme</b>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.marketplace}>@loidonsaf</div>
              							</div>
              							<div className={styles.solanaSolLogo1Parent}>
                								<img className={styles.solanaSolLogo1Icon1} alt="" src="/image/solana-sol-logo 1.png" />
                								<b className={styles.sol}>{token} SOL</b>
              							</div>
            						</div>
            						<div className={styles.action}>
              							<div className={styles.claimRewardWrapper}>
                								<button onClick={collectReward} className={styles.game}>Claim Reward</button>
              							</div>
              							<Link href='/Template'>
              							<div className={styles.swapWalletWrapper}>
                								<div className={styles.game}>Swap Wallet</div>
              							</div>
										  </Link>
            						</div>
            						<div className={styles.goldCoinMoneySymbolIconPnParent}>
              							<img className={styles.goldCoinMoneySymbolIconPn1} alt="" src="/image/gold-coin-money-symbol-icon-png 1.png" />
              							<b className={styles.coins}>{coin} coins</b>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.cardUnClick4} />
      			<div className={styles.frameDiv}>
        				<div className={styles.frameGroup}>
          					<div className={styles.userParent}>
            						<img className={styles.userIcon1} alt="" src="/image/User.png" />
            						<div className={styles.profileInfo}>Profile Info</div>
            						<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
          					</div>
          					<div className={styles.lineDiv} />
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.userParent}>
            						<img className={styles.userIcon1} alt="" src="/image/Setting_line_light.png" />
            						<div className={styles.accountSettings}>Account Settings</div>
            						<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
          					</div>
          					<div className={styles.lineDiv} />
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.userParent}>
            						<img className={styles.userIcon1} alt="" src="/image/Bell_light.png" />
            						<div className={styles.accountSettings}>Notification Settings</div>
            						<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
          					</div>
          					<div className={styles.lineDiv} />
        				</div>
        				<div className={styles.frameParent2}>
          					<div className={styles.userParent}>
            						<img className={styles.userIcon1} alt="" src="/image/Img_alt_light.png" />
            						<b className={styles.profileInfo}>Create Artwork</b>
            						<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
          					</div>
          					<div className={styles.lineDiv} />
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.userParent}>
            						<img className={styles.userIcon1} alt="" src="/image/Wallet_light.png" />
            						<div className={styles.accountSettings}>Wallet Info</div>
              							<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
            						</div>
            						<div className={styles.lineDiv} />
          					</div>
          					<div className={styles.frameGroup}>
            						<div className={styles.userParent}>
              							<img className={styles.userIcon1} alt="" src="/image/Check_ring_light.png" />
              							<Link href='/GetVerified' className={styles.accountSettings}>Get Verified</Link>
              							<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
            						</div>
            						<div className={styles.lineDiv} />
          					</div>
          					<div className={styles.frameGroup}>
            						<div className={styles.userParent}>
              							<img className={styles.userIcon1} alt="" src="/image/Sign_in_squre_light.png" />
              							<div className={styles.accountSettings}>Log Out</div>
              							<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
            						</div>
            						<div className={styles.lineDiv} />
          					</div>
        				</div>
        				<div className={styles.frameParent6}>
          					<div className={styles.groupWrapper}>
            						<div className={styles.uploadFileParent}>
              							<b className={styles.uploadFile}>Upload File</b>
              							<div className={styles.frameWrapper}>
                								<div className={styles.exportLightParent}>
                  									<img className={styles.exportLightIcon1} alt="" src="/image/Export_light.png" />
                  									<div className={styles.game}>Max 120MB, PNG JPEG, MP3, MP4</div>
                  									<div className={styles.button}>
                    										<div className={styles.game}>Large</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.frameParent7}>
            						<div className={styles.frameWrapper1}>
              							<div className={styles.groupFrame}>
                								<div className={styles.purchaseTypeWrapper}>
                  									<b className={styles.purchaseType}>Purchase Type</b>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameParent8}>
              							<div className={styles.cardUnClickParent}>
                								<div className={styles.cardUnClick5} />
                								<div className={styles.fixedPriceParent}>
                  									<div className={styles.game}>Fixed Price</div>
                  									<div className={styles.setAFixed1}>Set a fixed price for people to buy your work instantly.</div>
                								</div>
              							</div>
              							<div className={styles.cardUnClickGroup}>
                								<div className={styles.cardUnClick6} />
                								<div className={styles.timedAuctionParent}>
                  									<div className={styles.game}>Timed Auction</div>
                  									<div className={styles.theHighestBidder1}>The highest bidder at the end of the auction will be the winner.</div>
                								</div>
              							</div>
              							<div className={styles.cardUnClickParent}>
                								<div className={styles.cardUnClick6} />
                								<div className={styles.openForBidsParent}>
                  									<div className={styles.game}>Open for bids</div>
                  									<div className={styles.biddersMustAdhere1}>Bidders must adhere to the minimum bid increment.</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.mainDetailsParent}>
            						<b className={styles.mainDetails}>Main11 Details</b>
            						<div className={styles.frameParent9}>
              							<div className={styles.groupWrapper1}>
                								<div className={styles.artworkNameParent}>
                  									<b className={styles.artworkName}>Artwork Name</b>
                  									<div className={styles.breathingWrapper}>
                    										<div className={styles.game}>Breathing</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.priceParent}>
                								<b className={styles.artworkName}>Price</b>
                								<div className={styles.breathingWrapper}>
                  									<div className={styles.game}>3.21</div>
                								</div>
              							</div>
              							<div className={styles.selectCurrencyParent}>
                								<b className={styles.artworkName}>Select Currency</b>
                								<div className={styles.solanaParent}>
                  									<div className={styles.solana}>Solana</div>
                  									<img className={styles.userIcon1} alt="" src="/image/Expand_down_light.png" />
                								</div>
              							</div>
            						</div>
            						<div className={styles.groupWrapper2}>
              							<div className={styles.descriptionParent}>
                								<b className={styles.description}>Description</b>
                								<div className={styles.groupChild7} />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.button1}>
          					<div className={styles.game}>Create item</div>
        				</div>
      			</div>);
      			};
      			
				  export default dynamic (() => Promise.resolve(CreateArtwork), {ssr: false} )
      			