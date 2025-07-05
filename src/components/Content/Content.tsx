import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CallToActionButton from '../UI/CallToActionButton';
import PackageSelection from '../PackageSelection/PackageSelection';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { primaryFont, interRegular } from '@/app/fonts';

const Slideshow = dynamic(() => import('../Slideshow/Slideshow'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My Enhanced Laser Strike System + Virtual Steel Target!',
}) => {
  const scrollToPackages = useCallback(() => {
    const packagesSection = document.getElementById('package-selection');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="w-full bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
        <div className="w-full max-w-[1240px] mx-auto pt-5 lg:px-20 bg-white">
          <Slideshow />
        </div>
      </div>
      <div className="w-full max-w-[1240px] mx-auto px-5 py-1 lg:px-20 bg-white">
        <div className="space-y-2">
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-1">
              <div className="flex-shrink-0">
                <Image
                  src="/contentimages/reviewstars.webp"
                  alt="5 star rating"
                  width={114}
                  height={20}
                  className="w-[85px] sm:w-[114px] h-auto inline-block"
                />
              </div>
              <span className="font-semibold text-lg sm:text-2xl whitespace-nowrap">
                116 Reviews
              </span>
            </div>
            <div className="bg-[#f7f2f2] py-2 sm:py-2 sm:px-6 inline-block text-[13px] sm:text-2xl whitespace-nowrap overflow-x-auto w-full sm:w-auto">
              <span className="inline-flex items-center">
                <span className="mr-1">✨</span>
                <strong>
                  <span className="hidden sm:inline">Highly rated by customers for: </span>
                  <span className="sm:hidden">Highly rated by customers for: </span>
                  <u>ease of use</u>, <u>quality</u>
                </strong>
              </span>
            </div>
          </div>
          {/* Testimonial Section */}
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-[#f9f9f9] rounded-lg shadow-sm border border-[#ddd]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/contentimages/testimonialLSSHolsterMobilesize.avif"
                    alt="Don T."
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 56px, 64px"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2f78c9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ✓
                </div>
              </div>
              <div className="text-center sm:text-left min-w-[120px]">
                <div className="font-bold">Don T.</div>
                <div className="text-[13px] text-gray-600 mb-2">Verified Buyer</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold mb-2">Top Review</div>

                <div className="text-yellow-400 text-xl">★★★★★</div>

                <h3 className="font-semibold text-lg mb-2">
                  I've already saved $100s in ammo and range time!
                </h3>

                <span className="text-[15px] text-gray-600 leading-tight block">
                  "It's a fantastic tool for improving trigger control. The setup is simple and
                  helps refine each shot. It's a cost-effective way to train without wasting ammo.
                  Highly recommended for anyone serious about honing their shooting skills!"
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage1Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[42px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak">Love It Or You Don't Pay A Dime!</div>
            </h1>
          </header>
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="w-full max-w-4xl mx-auto my-6 px-4 py-5">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <div className="w-[100px] sm:w-[140px] h-auto aspect-[140/120] relative">
                <Image
                  src="/contentimages/VNSH_MONEY-BACK.webp"
                  alt="Money Back Guarantee"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[120px] sm:w-[165px] h-auto aspect-[165/120] relative">
                <Image
                  src="/contentimages/VNSH_SECURE-CHECKOUT.webp"
                  alt="Secure Checkout"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[120px] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_aMERICAN.webp"
                  alt="American Made"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[120px] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_FAST-SHIP.webp"
                  alt="Fast Shipping"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <header className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[42px] font-medium leading-[1] md:leading-tight mb-4 px-2">
              <div className="font-jawbreak">
                Why This System Ensures You{' '}
                <span className="text-[#ff0000] underline">
                  Make The One Shot You Can't Afford To Miss
                </span>
              </div>
            </h1>
          </header>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              ✅ <span className="font-bold">Helps Eliminate “Recoil Flinch”:</span> Recoil itself
              has zero impact on your accuracy. But your anticipation of recoil can have a serious
              impact. Since the Laser Strike takes recoil out of the equation, you can train
              yourself to eliminate the “recoil flinch” that plagues so many shooters.
            </p>
            <p>
              🔫 😌 <span className="font-bold">Reduces Firearm Wear-and-Tear:</span> Not only is
              the Laser Strike guaranteed to be 100% safe for your guns, but it also minimizes
              overall wear and the frequency with which you need to clean them – since it reduces
              the amount of live ammo you use.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage2Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              🔄 <span className="font-bold">Works With a Wide Range of Firearms:</span> If your gun
              shoots 9MM, .45 ACP, .40 S&W, and .380 ACP, then it will work with the Laser Strike.
              Just be sure to select the appropriate caliber when placing your order.
            </p>
            <p>
              🛡️ <span className="font-bold">100% Safe (and Quiet) for Home Use:</span> After
              ensuring your gun is fully unloaded and contains nothing but the laser cartridge, the
              Laser Strike lets you safely practice around friends and family with zero worry.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage3Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              🙌 <span className="font-bold">Incredibly Simple to Setup ANYWHERE:</span> All it
              takes is 5 yards of space and 5 minutes of prep to start training anywhere you want!
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] px-4 md:px-0">
            <Image
              src="/contentimages/BlockImage4Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="content-paragraph">
              The VNSH Laser Strike Training System is a revolutionary dry fire laser training
              platform that simulates shooting live rounds{' '}
              <span className="italic font-bold">as closely as possible…</span>
            </p>
            <p className="content-paragraph">
              …so you can practice any time, any place, and{' '}
              <span className="italic font-bold">without spending a single penny</span> on range
              time or ammo!
            </p>
            <p className="content-paragraph">
              It's the easiest way to get the extra practice{' '}
              <span className="font-bold">you must have</span> to gain maximum accuracy and
              confidence with your firearm.
            </p>
            <p className="content-paragraph">
              And it also{' '}
              <span className="underline font-bold">
                saves you $100s – if not $1,000s – of dollars in the process.
              </span>
            </p>
            <p className="content-paragraph">
              By removing the time and cost of shooting live rounds…
            </p>
            <p className="content-paragraph">
              The Laser Strike System{' '}
              <span className="font-bold">gives you an "unfair advantage"</span> to becoming the
              best shooter possible.
            </p>
            <p className="content-paragraph">That's the simple reason why…</p>
          </div>
          <header className="text-center py-1 my-6">
            <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-tight text-[#f16500]">
              1,000s of Gun Owners Have Used It to{' '}
              <span className="text-red-600">Kill Their Bad Shooting Habits…</span> Like a Cheat
              Code for Better Accuracy and Speed!
            </span>
          </header>
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              What does it take to become the{' '}
              <span className="italic font-bold">best shooter possible?</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed underline">
              It takes thousands of trigger pulls!!
            </p>
            <p className="text-base md:text-lg leading-relaxed font-bold">
              Just listen to World Champion marksman Robert Vogel…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              When asked “How often do you dry fire?” he replied…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              <span className="bg-[#ff0] py-1 font-extrabold italic">
                “In one form or another, just about every day. For sheer skill building I feel it
                has no equal. For every live round that I actually fire,{' '}
                <span className="underline">
                  I probably mimic that round eight to 10 times in dry fire."
                </span>
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              See, even the professionals can’t afford to spend countless hours in the range.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              And they know dry fire training is the best shortcut to get their volume in.``
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              But the Laser Strike System{' '}
              <span className="font-bold underline">upgrades traditional dry fire</span> training
              <span className="font-bold italic"> from a shortcut to a full-on cheat code!</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Because instead of just letting you practice your draw, trigger pull, and gun
              handling…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The Laser Strike System lets you{' '}
              <span className="font-bold italic">
                simulate putting rounds on target{' '}
                <span className="underline">with instant feedback!</span>
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              For anyone who LOVES to shoot… and wants to max out their confidence and accuracy…{' '}
              <span className="font-bold italic">
                but just doesn’t have the time, money, and ammo to do it at the range…
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The Laser Strike System is a must-have.
            </p>
            <p className="text-base md:text-lg leading-relaxed">Even better though…</p>
          </div>
          <div className="text-center my-8">
            <CallToActionButton onClick={scrollToPackages} />
          </div>
          <div className="text-center my-8">
            <p className="text-xl md:text-xl font-semibold leading-normal text-red-600 italic">
              <span className="bg-[#ff0] px-1 py-1">
                60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
              </span>
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto space-y-6">
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-normal text-[#f16500]">
                This System Is <span className="text-red-600">Stupid-Simple to Use!</span>
              </span>
            </header>
            <div className="w-full text-center my-2">
              <div className="text-xl md:text-2xl font-bold text-black px-1 py-1 inline-block">
                <span className="bg-[#ff0] py-1 italic">(5-Minute Setup Anywhere)</span>
              </div>
            </div>
            <div className="mx-auto w-full md:max-w-[80%]">
              <Image
                src="/contentimages/LaserStrikeDemoV2SNoGlitch.webp"
                alt="Laser Strike System"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="space-y-4 text-xl leading-tight md:text-2xl">
              <p>
                Since the whole point of the Laser Strike System is to{' '}
                <span className="font-bold italic">get you dead accurate as fast as possible</span>…
              </p>
              <p className="mb-4 font-bold">
                …we knew we had to make it as easy to use as possible too.
              </p>
              <p className="mb-4">So that’s exactly what we did:</p>
            </div>
            <div className="mb-8 -ml-4 md:-ml-6">
              <ul className="space-y-5 text-xl leading-tight md:text-2xl pl-4 md:pl-6">
                {[
                  {
                    step: 'Step #1 - Insert the Laser Cartridge:',
                    text: ' With a gorgeous graf metal finish, our laser cartridge is engineered to fit perfectly in your firearm – featuring a soft rubber backing that absorbs the impact of your firing pin to activate the laser inside.',
                  },
                  {
                    step: 'Step #2 - Set Up Your Target:',
                    text: ' For more relaxed plinking, just stick the "virtual steel" target on any wall and start shooting (more on this in a second). Or to analyze your groups more closely, do a quick setup with the included paper targets, tripod, and smartphone app.',
                  },
                  {
                    step: 'Step #3 - Start Training and Be Amazed:',
                    text: " Set aside a few minutes to use your Laser Strike System every day, and we guarantee you'll watch your accuracy skyrocket!",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <strong>{item.step}</strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>As you can see…</p>
              <p>
                The Laser Strike System{' '}
                <span className="font-bold italic">removes all barriers</span> to train daily and
                get insanely accurate.
              </p>
              <p>
                But it now includes something that{' '}
                <span className="font-bold italic underline">
                  makes training more FUN than ever, which is…
                </span>
              </p>
            </div>
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-tight text-[#f16500]">
                This New <span className="text-red-600">“Virtual Steel” Target</span> That Gives You
                Instant Audible Feedback…
              </span>
            </header>
            <div className="w-full text-center my-2">
              <div className="text-xl md:text-2xl font-bold text-black px-1 py-1 inline-block">
                <span className="bg-[#ff0] py-1 italic">(Like Duck Hunt for Grown-Ups)</span>
              </div>
            </div>
            <p>
              By far the coolest thing about the new Enhanced Laser Strike System is the fact it
              comes with a “virtual steel” target – which works seamlessly with your laser cartridge
              insert.
            </p>
            <p>
              Just rack the insert, fire at the digital steel, and grin ear-to-ear every time you
              hear it PING! 🤠
            </p>
            <p>
              But that’s just one of the things that makes this breakthrough dry fire system so
              awesome…
            </p>
            <div className="text-center my-8">
              <CallToActionButton onClick={scrollToPackages} />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-xl font-semibold leading-normal text-red-600 italic">
                <span className="bg-[#ff0] px-1 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-tight text-[rgb(255,0,0)]">
                6 Reasons
                <span className="text-[#f16500]">
                  {' '}
                  the Laser Strike Will Help You Make the Shot{' '}
                </span>
                <span>You Can’t Afford to Miss…</span>
              </div>
            </header>
            <p>
              You carry a gun for <span className="font-bold">1 simple reason:</span>{' '}
              <span className="underline">
                to be able to defend your life and the lives of your loved ones.
              </span>
            </p>
            <p>And if you’re ever forced to deploy your firearm…</p>
            <p>
              You may not have more than a <span className="font-bold italic">few moments</span> and
              a <b>single shot</b> to do it effectively. That’s why it’s{' '}
              <span className="font-bold underline">so critical</span> to achieve the split-second
              level of accuracy the Laser Strike System can give you!
            </p>
            <p>
              It lets you <span className="font-bold italic">finally gain</span> the “second nature”
              response to reliably draw and put rounds on target{' '}
              <span className="font-bold italic">without thinking about it one bit. </span>
            </p>
            <p>And it lets you do it far faster than range time with live rounds alone!</p>
            <p>
              That simple fact alone is reason enough to own one, but that’s not the only thing that
              makes it great:
            </p>
            <div className="md:pl-6">
              <ul className="mb-6 text-xl md:text-2xl leading-none md:space-y-6">
                {/* First item with image */}
                <li className="flex flex-col md:flex-row md:items-center gap-4 -ml-4 md:ml-0">
                  <div className="flex-1 flex flex-col h-full justify-center pr-4 md:pr-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Helps Eliminate "Recoil Flinch":</b> Recoil
                        itself has zero impact on your accuracy. But your anticipation of recoil can
                        have a serious impact. Since the Laser Strike takes recoil out of the
                        equation, you can train yourself to eliminate the "recoil flinch" that
                        plagues so many shooters.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Reduces Firearm Wear-and-Tear:</b> Not only is
                        the Laser Strike guaranteed to be 100% safe for your guns, but it also
                        minimizes overall wear and the frequency with which you need to clean them –
                        since it reduces the amount of live ammo you use.
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full md:w-[40%] flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center my-auto">
                    <Image
                      src="/contentimages/VNSH-laser-list1.webp"
                      alt="Recoil Training"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
                {/* Second item with image */}
                <li className="flex flex-col md:flex-row md:items-center gap-4 -ml-4 md:ml-0">
                  <div className="flex-1 flex flex-col h-full justify-center pr-4 md:pr-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Companion Smartphone App:</b> Available for both
                        Apple and Android phones, the free app that goes with your Laser Strike
                        System offers innovative functionality that detects and records laser hits
                        instantly, giving you additional insight with every shot.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Compatible With a Wide Range of Firearms:</b> If
                        your gun shoots 9MM, .45 ACP, .40 S&W, and .380 ACP, then it will work with
                        the Laser Strike. Just be sure to select the appropriate caliber when
                        placing your order. If you don’t see your caliber, just know we plan to add
                        more soon!
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full md:w-[40%] flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center my-auto">
                    <Image
                      src="/contentimages/VNSH-laser-list2.webp"
                      alt="Recoil Training"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
                {/* 3rd item with image */}
                <li className="flex flex-col md:flex-row md:items-center gap-4 -ml-4 md:ml-0">
                  <div className="flex-1 flex flex-col h-full justify-center pr-4 md:pr-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">100% Safe for Home Use:</b> After ensuring your
                        gun is fully unloaded and contains nothing but the laser cartridge, the
                        Laser Strike lets you safely practice around friends and family with zero
                        worry.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Super Portable:</b> The entire Laser Strike
                        system can fit into any small backpack or gun bag no problem. Take it on
                        vacation, to a friend's house, or just about anywhere.
                      </span>
                    </div>
                    <div className="flex items-start mt-4">
                      <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                        <Image
                          src="/contentimages/greenCheck.png"
                          alt="Checkmark"
                          width={32}
                          height={32}
                          className="w-full h-auto"
                        />
                      </div>
                      <span className="mt-1">
                        <b className="text-red-600">Totally Quiet:</b> There’s never any risk of
                        disturbing your wife, kids, or neighbors, because the Laser Strike lets you
                        practice in total silence!
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-full md:w-[40%] flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center my-auto">
                    <Image
                      src="/contentimages/VNSH-laser-list3.webp"
                      alt="Recoil Training"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center my-8">
              <CallToActionButton onClick={scrollToPackages} />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600 italic">
                <span className="bg-[#ff0] px-1 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[#f16500]">
                <div>You’re Getting An</div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,0,0)]">Iron-Clad, Money-Back </span>
                  <span>Guarantee</span>
                </div>
              </div>
            </header>
            <div className="w-4/5 md:w-[30%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/guarantee-money-back-200.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p>Love everything about your order, or we’ll refund you every penny.</p>
            <p>It’s that simple.</p>
            <p>You have a full 60 days to try out the Laser Strike System yourself…</p>
            <p>
              See how easy it is to use… how rapidly it improves your shooting…{' '}
              <span className="bg-[#ff0] py-1 font-bold">and how downright FUN it is…</span>
            </p>
            <p>
              If you aren’t totally thrilled, just contact our{' '}
              <span className="underline">US-Based Support Team</span> and get a prompt, no-hassle
              refund.
            </p>
            <p className="font-bold">Plus, you also get a 2-year workmanship guarantee as well!</p>
            <p>
              We know you’ll love your Laser Strike System, which is why we’re happy to extend you
              these iron-clad guarantees.
            </p>
            <p>
              So if you want to get an awesome price on the{' '}
              <span className="font-bold italic">
                fastest, easiest, and funnest way to become a dead accurate shooter…
              </span>
            </p>
            <p id="package-selection">Then you owe it to yourself to grab this deal now!</p>

            {/* Package Selection Component */}
            <div>
              <PackageSelection />
            </div>

            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-tight text-[#f16500]">
                Frequently Answered Questions About the VNSH Laser Strike Training System
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
