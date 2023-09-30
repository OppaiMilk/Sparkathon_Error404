import styles from './index.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';



const HomePage = () => {
  	return (
    		<div className={styles.homePage}>
      			<div className={styles.homePageChild} />
      			<div className={styles.homePageItem} />
      			<img className={styles.solanaSolLogo1Icon1} alt="" src="/image/solana-sol-logo 1.png" />
      			<b className={styles.sol331}>SOL 3.31</b>
      			<div className={styles.vectorParent}>
        				<img className={styles.groupChild} alt="" src="/image/Ellipse 69.svg" />
        				<b className={styles.b}>360</b>
      			</div>
      			<div className={styles.tetrasolanaAllRights}>© 2023 TetraSOlana. All rights reserved.</div>
      			<div className={styles.home}>
        				<div className={styles.homeChild} />
        				<div className={styles.heroleft}>
          					<div className={styles.groupParent}>
            						<div className={styles.kParent}>
              							<b className={styles.k}>37k+</b>
              							<div className={styles.artworks}>Artworks</div>
            						</div>
            						<div className={styles.kGroup}>
              							<b className={styles.k1}>20k+</b>
              							<div className={styles.artists}>Artists</div>
            						</div>
            						<div className={styles.kContainer}>
              							<b className={styles.k2}>99k+</b>
              							<div className={styles.artworks}>Aucations</div>
            						</div>
          					</div>
          					<div className={styles.desc}>
            						<div className={styles.experienceTheClassic1}>Experience the classic game of Tetris like never before. Combine your gaming skills with blockchain rewards. Join us in the TetraSOlana revolution and transform your high scores into high rewards!</div>
            						<b className={styles.playEarn1}>{`Play, Earn & Collect Your Own Creative NFT`}</b>
            						<div className={styles.action}>
              							<div className={styles.exploreNowWrapper}>
                								<div className={styles.exploreNow}>Explore Now</div>
              							</div>
              							<div className={styles.sellNftWrapper}>
                								<div className={styles.exploreNow}>Sell NFT</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<img className={styles.icon} alt="" src="/image/6407088 1.png" />
      			</div>
      			<div className={styles.header}>
        				<div className={styles.marketplaceParent}>
                        <Link href='/MarketPlace'>
							<div className={styles.exploreNow}>Marketplace</div>
						</Link>
						<Link href='/'>                          
							<div className={styles.exploreNow}>Game</div>
						</Link>
						<Link href='/'>
							<div className={styles.exploreNow}>FAQ</div>
						</Link>
          					<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        					<WalletMultiButton></WalletMultiButton>
							</div>     
          					<div className={styles.ellipseParent}>
            						<div className={styles.groupItem} />
            						<div className={styles.groupInner} />
          					</div>
        				</div>
        				<b className={styles.tetrasolana}>
          					<span>Tetra</span>
          					<span className={styles.so}>SO</span>
          					<span>lana</span>
        				</b>
        				<div className={styles.search}>
          					<div className={styles.searchChild} />
          					<div className={styles.searchParent}>
            						<img className={styles.searchIcon1} alt="" src="/image/search.svg" />
            						<div className={styles.exploreNow}>Search items and collections</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.marketplcae}>
        				<div className={styles.title}>
          					<b className={styles.exploreMarketplace}>Explore Marketplace</b>
          					<div className={styles.exploreAWorld1}>Explore a world of opportunities within our Tetris Marketplace. Buy, sell, and trade your in-game assets for SOL tokens. Turn your gaming prowess into a thriving digital marketplace adventure!</div>
        				</div>
        				<div className={styles.conectWalletWrapper}>
                        <Link href='/MarketPlace'>
							<div className={styles.exploreNow}>View More</div>
							</Link>
        				</div>
        				<div className={styles.cardUnClickParent}>
          					<div className={styles.cardUnClick}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/1.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>NexaCube</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@loidonsaf</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>0.8 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick1}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/2.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>Metamorph</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@reaflu</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>1.0 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick2}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/3.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>Castel Sand</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@zinksu</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>0.7 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick3}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/4.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>Nuckle</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@zoldick</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>1.3 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick4}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/5.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>Moonshine</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@rere2880</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>0.5 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick5}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/6.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>Petition</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@downhill</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>1.3 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick6}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/7.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>Incublast</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@mikeyobstain</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>1.1 SOL</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.cardUnClick7}>
            						<div className={styles.cardUnClickInner}>
              							<img className={styles.frameChild} alt="" src="/image/8.png" />
            						</div>
            						<div className={styles.frameParent}>
              							<div className={styles.inceptionWrapper}>
                								<div className={styles.exploreNow}>NexaCube</div>
              							</div>
              							<div className={styles.loidonsafWrapper}>
                								<div className={styles.loidonsaf}>@loidonsaf</div>
              							</div>
              							<div className={styles.ethWrapper}>
                								<b className={styles.eth}>0.8 SOL</b>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.faq1}>
        				<div className={styles.frequentlyAskedQuestionParent}>
          					<b className={styles.frequentlyAskedQuestion1}>Frequently Asked Question</b>
          					<div className={styles.wannaAskSomething1}>Wanna Ask Something?</div>
            						</div>
            						<div className={styles.groupParent1}>
              							<div className={styles.parent}>
                								<div className={styles.div}>+</div>
                								<div className={styles.isThisTetrasolana}>What is the TetraSOlana, and how does it work?</div>
                  									<div className={styles.lineDiv} />
                  									</div>
                  									<div className={styles.parent}>
                    										<div className={styles.div}>+</div>
                    										<div className={styles.isThisTetrasolana}>Is this TetraSOlana free to play, or are there costs involved?</div>
                      											<div className={styles.lineDiv} />
                      											</div>
                      											<div className={styles.parent}>
                        												<div className={styles.div}>+</div>
                        												<div className={styles.isThisTetrasolana}>How can I earn rewards by playing TetraSOlana?</div>
                          													<div className={styles.lineDiv} />
                          													</div>
                          													<div className={styles.parent}>
                            														<div className={styles.div}>+</div>
                            														<div className={styles.isThisTetrasolana}>Do I need to hold SOL or other cryptocurrencies to play TetraSOlana?
</div>
                              															<div className={styles.lineDiv} />
                              															</div>
                              															<div className={styles.parent}>
                                																<div className={styles.div}>+</div>
                                																<div className={styles.isThisTetrasolana}> What is the security protocol for protecting player assets and transactions within the Tetris game?
</div>
                                  																	<div className={styles.lineDiv} />
                                  																	</div>
                                  																	<div className={styles.parent}>
                                    																		<div className={styles.div}>+</div>
                                    																		<div className={styles.isThisTetrasolana}>Can I use my existing Solana wallet, or do I need to create a new one to participate in the project?
</div>
                                      																			<div className={styles.lineDiv} />
                                      																			</div>
                                      																			</div>
                                      																			</div>
                                      																			<img className={styles.sponsoredIcon} alt="" src="/image/sponsored.png" />
                                      																			<div className={styles.cta}>
                                        																				<div className={styles.ctaChild} />
                                        																				<b className={styles.getReadyToContainer}>
                                          																					<p className={styles.ourNft}>Get ready to collect</p>
                                          																					<p className={styles.ourNft}>our NFT</p>
                                        																				</b>
                                        																				<div className={styles.getStartedWrapper}>
                                          																					<div className={styles.exploreNow}>Get Started</div>
                                        																				</div>
                                      																			</div>
                                      																			<div className={styles.footer}>
                                        																				<div className={styles.aboutParent}>
                                          																					<b className={styles.about}>About</b>
                                          																					<div className={styles.product}>Product</div>
                                          																					<div className={styles.resource}>Resource</div>
                                          																					<div className={styles.termCondition1}>{`Term & Condition`}</div>
                                          																					<div className={styles.faq2}>FAQ</div>
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
                                          																					<div className={styles.div6}>+012 3456789</div>
                                          																					<div className={styles.tetrasolanagmailcom}>tetrasolana@gmail.com</div>
                                          																					<div className={styles.youtubeParent}>
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/youtube.svg" />
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/discord.svg" />
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/instagram.svg" />
                                          																					</div>
                                        																				</div>
                                      																			</div>
                                      																			<div className={styles.homePageInner} />
                                      																			</div>);
                                    																		};
                                    																		
                                                                                                            export default dynamic (() => Promise.resolve(HomePage), {ssr: false} )
                                    																		