import styles from './index.module.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const ProfilInfo = () => {
	const successful = () => {
		alert("successful");
	  };

  	return (
    		<div className={styles.profilInfo}>
      			<div className={styles.profilInfoChild} />
      			<div className={styles.tetrasolanaAllRights}>© 2023 TetraSOlana. All rights reserved.</div>
      			<div className={styles.footer}>
        				<div className={styles.aboutParent}>
          					<b className={styles.about}>About</b>
          					<div className={styles.product}>Product</div>
          					<div className={styles.resource}>Resource</div>
          					<div className={styles.termCondition1}>{`Term & Condition`}</div>
          					<div className={styles.faq}>FAQ</div>
        				</div>
        				<div className={styles.theBestNftMarketplaceWebsiParent}>
          					<div className={styles.theBestNft}>The best NFT marketplace website in the world and feel your experience in selling or buy our work.</div>
          					<b className={styles.tetrasolana}>
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
      			<div className={styles.profilInfoItem} />
      			<div className={styles.frameParent}>
        				<div className={styles.productDetailsWrapper}>
          					<b className={styles.productDetails}>
            						<span className={styles.curated}>Product</span>
            						<span> Details</span>
          					</b>
        				</div>
        				<div className={styles.image3Parent}>
          					<img className={styles.image3Icon} alt="" src="/image/6.png" />
          					<div className={styles.frameWrapper}>
            						<div className={styles.groupWrapper}>
              							<div className={styles.cloudytParent}>
                								<b className={styles.cloudyt}>
                  									<span>Cloudy</span>
                  									<span className={styles.t}>T</span>
                  									<span>{` `}</span>
                								</b>
                								<div className={styles.groupChild} />
                								<div className={styles.frameGroup}>
                  									<div className={styles.zinksuWrapper}>
                    										<b className={styles.productDetails}>zinksu</b>
                  									</div>
                  									<div className={styles.zinksuContainer}>
                    										<div className={styles.productDetails}>@zinksu</div>
                  									</div>
                  									<img className={styles.profilePictureIcon1} alt="" src="/image/User.png" />
                								</div>
                								<div className={styles.frameDiv}>
                  									<div className={styles.labelParent}>
                    										<div className={styles.label}>Label</div>
                    										<b className={styles.sol}>0.7 SOL</b>
                  									</div>
                  									<img className={styles.vectorIcon} alt="" src="Vector.svg" />
                  									<div className={styles.auctionEndsInParent}>
                    										<div className={styles.auctionEndsIn1}>Auction ends in</div>
                    										<div className={styles.groupDiv}>
                      											<div className={styles.frameParent1}>
                        												<div className={styles.productDetailsWrapper}>
                          													<b className={styles.productDetails}>01</b>
                          													<div className={styles.days}>Days</div>
                        												</div>
                        												<div className={styles.frameWrapper1}>
                          													<div className={styles.group}>
                            														<b className={styles.productDetails}>04</b>
                            														<div className={styles.days}>Hours</div>
                          													</div>
                        												</div>
                        												<div className={styles.container}>
                          													<b className={styles.b2}>31</b>
                          													<div className={styles.mins}>Mins</div>
                        												</div>
                        												<div className={styles.container}>
                          													<b className={styles.b2}>32</b>
                          													<div className={styles.mins}>Secs</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.interactiveFunIts1}>Interactive Fun: It’s not just a static piece – you can use our Tetris “T” block for creative play. Challenge your friends and family to a Tetris-inspired puzzle-solving competition or use it as a stress-relief toy during work breaks.</div>
                  									<div className={styles.buttonParent}>
                    										<div className={styles.button}>
                      											<button onClick={successful} className={styles.conectWallet}>Place a Bid</button>
                    										</div>
                    										
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.curatedCollectionsParent}>
            						<b className={styles.productDetails}>
              							<span className={styles.curated}>Curated</span>
              							<span> Collections</span>
            						</b>
            						<div className={styles.frameParent2}>
              							<div className={styles.image10Parent}>
                								<img className={styles.image10Icon} alt="" src="/image/7.png" />
                								<div className={styles.conectWallet}>Nuckle</div>
              							</div>
              							<div className={styles.image10Parent}>
                								<img className={styles.image8Icon} alt="" src="/image/4.png" />
                								<div className={styles.conectWallet}>Petition</div>
              							</div>
              							<div className={styles.image10Parent}>
                								<img className={styles.image8Icon} alt="" src="/image/8.png" />
                								<div className={styles.conectWallet}>Incublast</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.header}>
          					<div className={styles.marketplaceParent}>
							  <Link href='/MarketPlace'>
							<div className={styles.exploreNow}>Marketplace</div>
						</Link>
						<Link href='/Tetris'>                          
							<div className={styles.exploreNow}>Game</div>
						</Link>
						<Link href='/FAQ'>
							<div className={styles.exploreNow}>FAQ</div>
						</Link>
						<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        					<WalletMultiButton></WalletMultiButton>
							</div>  
            						<Link href='/CreateArt'>
          					<div className={styles.ellipseParent}>
            						<div className={styles.groupItem} />
            						<div className={styles.groupInner} />
          					</div>
							  </Link>   
          					</div>
							<Link href='/'>
          					<b className={styles.tetrasolana1}>
            						<span>Tetra</span>
            						<span className={styles.so}>SO</span>
            						<span>lana</span>
          					</b>
							</Link>
							

          					<div className={styles.search}>
            						<div className={styles.searchChild} />
            						<div className={styles.searchParent}>
              							<img className={styles.searchIcon1} alt="" src="/image/search.svg" />
              							<div className={styles.conectWallet}>Search items and collections</div>
            						</div>
          					</div>
        				</div>
      			</div>);
      			};
      			
export default dynamic (() => Promise.resolve(ProfilInfo), {ssr: false} )      			