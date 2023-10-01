import styles from './index.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


 

const Marketplace = () => {
  	return (
<div className={styles.marketplace}>
<div className={styles.marketplaceChild} />
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
        					<WalletMultiButton></WalletMultiButton>
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
<div className={styles.marketplcae}>
<div className={styles.title}>
<b className={styles.exploreMarketplace}>Explore Marketplace</b>
<div className={styles.exploreAWorld1}>Explore a world of opportunities within our Tetris Marketplace. Buy, sell, and trade your in-game assets for SOL tokens. Turn your gaming prowess into a thriving digital marketplace adventure!</div>
</div>
<div className={styles.conectWalletWrapper}>
<div className={styles.game}>View More</div>
</div>

<div className={styles.cardUnClickParent}>
<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/1.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>NexaCube</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@loidonsaf</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>0.8 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>

<div className={styles.cardUnClick1}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/2.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>Metamorph</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@reaflu</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>1.0 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick2}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/3.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>Castel Sand</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@zinksu</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>0.7 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick3}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/4.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>Nuckle</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@zoldick</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>1.3 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick4}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/5.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>Moonshine</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@rere2880</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>0.5 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick5}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/6.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>Petition</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@downhill</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>1.3 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick6}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/7.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>Incublast</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@mikeyobstain</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>1.1 SOL</b>
</div>
</div>
</div>
</Link>

<Link href='/PurchaseOrder'>
<div className={styles.cardUnClick7}>
<div className={styles.cardUnClickInner}>
<img className={styles.frameChild} alt="" src="/image/8.png" />
</div>
<div className={styles.frameParent}>
<div className={styles.inceptionWrapper}>
<div className={styles.game}>NexaCube</div>
</div>
<div className={styles.loidonsafWrapper}>
<div className={styles.loidonsaf}>@loidonsaf</div>
</div>
<div className={styles.ethWrapper}>
<b className={styles.eth}>0.8 SOL</b>
</div>
</div>
</div>
</Link>
</div>

</div>
<div className={styles.footer}>
<div className={styles.aboutParent}>
<b className={styles.about}>About</b>
<div className={styles.product}>Product</div>
<div className={styles.resource}>Resource</div>
<div className={styles.termCondition1}>{`Term & Condition`}</div>
<div className={styles.features}>FAQ</div>
</div>
<div className={styles.companyParent}>
<b className={styles.about}>Company</b>
<div className={styles.product}>Our Team</div>
<div className={styles.resource}>Partner With Us</div>
<div className={styles.termCondition1}>{`Privacy & Policy`}</div>
<div className={styles.features}>Features</div>
</div>
<div className={styles.theBestNftMarketplaceWebsiParent}>
<div className={styles.theBestNft}>The best NFT marketplace website in the world and feel your experience in selling or buy our work.</div>
<Link href='/'>
						<b className={styles.tetrasolana}>
          					<span>Tetra</span>
          					<span className={styles.so}>SO</span>
          					<span>lana</span>
        				</b>
						</Link>
</div>
<div className={styles.contactParent}>
<b className={styles.about}>Contact</b>
<div className={styles.product}>+012 3456789</div>
<div className={styles.resource}>tetrasolana@gmail.com</div>
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
<div className={styles.marketplaceItem} />
<div className={styles.ellipseParent}>
<div className={styles.groupChild} />
<div className={styles.groupItem} />
</div>
<div className={styles.ellipseParent}>
<div className={styles.groupChild} />
<div className={styles.groupItem} />
</div>
</div>);
};

 

export default dynamic (() => Promise.resolve(Marketplace), {ssr: false} )
