import styles from './index.module.css';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic';



const Frame = () => {
  	return (
    		<div className={styles.groupParent}>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
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
              							<div className={styles.marketplace}>Search items and collections</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.faqContentWrapper}>
          					<div className={styles.faqContent}>
            						<div className={styles.top}>
              							<b className={styles.frequentlyAskedQuestionContainer}>
                								<span className={styles.frequently}>Frequently</span>
                								<span> Asked Question</span>
              							</b>
            						</div>
            						<div className={styles.firstContent}>
              							<div className={styles.profileDetailsParent}>
                								<div className={styles.profileDetails6} />
                								<div className={styles.whatIsTheTetrasolanaAndHParent}>
                  									<b className={styles.isThisTetrasolana}>What is the TetraSOlana, and how does it work?</b>
                    										<div className={styles.frameChild} />
                    										<div className={styles.div}>+</div>
                    										<div className={styles.theSolanaTetris1}>The Solana Tetris GameFi project is an innovative fusion of the classic Tetris game with blockchain and GameFi features. It leverages Solana's high-speed blockchain technology to offer an enhanced gaming experience. Players can enjoy Tetris while also earning rewards in the form of native tokens or NFTs.
</div>
                    										</div>
                    										</div>
                    										<div className={styles.firstContentChild} />
                    										</div>
                    										<div className={styles.faqContentInner}>
                      											<div className={styles.profileDetailsGroup}>
                        												<div className={styles.profileDetails7} />
                        												<div className={styles.howCanIEarnRewardsByPlayParent}>
                          													<b className={styles.isThisTetrasolana}>How can I earn rewards by playing TetraSOlana?</b>
                            														<div className={styles.frameChild} />
                            														<div className={styles.div}>+</div>
                            														</div>
                            														</div>
                            														</div>
                            														<div className={styles.faqContentChild}>
                              															<div className={styles.profileDetailsContainer}>
                                																<div className={styles.profileDetails8} />
                                																<div className={styles.doINeedToHoldSolOrOtherParent}>
                                  																	<b className={styles.isThisTetrasolana}>Do I need to hold SOL or other cryptocurrencies to play TetraSOlana?</b>
                                    																		<div className={styles.frameChild} />
                                    																		<div className={styles.div}>+</div>
                                    																		</div>
                                    																		</div>
                                    																		</div>
                                    																		<div className={styles.frameDiv}>
                                      																			<div className={styles.profileDetailsParent1}>
                                        																				<div className={styles.profileDetails9} />
                                        																				<div className={styles.canIUseMyExistingSolanaWParent}>
                                          																					<b className={styles.isThisTetrasolana}>Can I use my existing Solana wallet, or do I need to create a new one to participate in the project?</b>
                                            																						<div className={styles.frameChild} />
                                            																						<div className={styles.div}>+</div>
                                            																						</div>
                                            																						</div>
                                            																						</div>
                                            																						<div className={styles.faqContentInner1}>
                                              																							<div className={styles.profileDetailsParent2}>
                                                																								<div className={styles.profileDetails10} />
                                                																								<div className={styles.whatIsTheSecurityProtocolParent}>
                                                  																									<b className={styles.whatIsThe3}>What is the security protocol for protecting player assets and transactions within the Tetris game?</b>
                                                    																										<div className={styles.frameChild} />
                                                    																										<div className={styles.div}>+</div>
                                                    																										</div>
                                                    																										</div>
                                                    																										</div>
                                                    																										<div className={styles.profileDetailsParent3}>
                                                      																											<div className={styles.profileDetails11} />
                                                      																											<div className={styles.doINeedToHoldSolOrOtherParent}>
                                                        																												<b className={styles.isThisTetrasolana}>Is this TetraSOlana free to play, or are there costs involved?</b>
                                                          																													<div className={styles.frameChild} />
                                                          																													<div className={styles.div}>+</div>
                                                          																													</div>
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
                                                              																															<div className={styles.div6}>+012 3456789</div>
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
                                                          																													<div className={styles.tetrasolanaAllRights}>© 2023 TetraSOlana. All rights reserved.</div>
                                                          																													</div>
                                                          																													</div>);
                                                        																												};
                                                        																												
																																										export default dynamic (() => Promise.resolve(Frame), {ssr: false} )
                                                        																												