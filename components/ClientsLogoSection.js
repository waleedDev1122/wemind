import Image from 'next/image';

export default function ClientsLogoSection() {
  return (
    <section className="clients-logo-section">
      <div className="text-center">
        <p className="clients-partners-text mb-4">Join 4,000+ companies already partnering with us</p>
        <div className="logos-wrapper">
          <div className="logos-slide">
            {/* Repeat the logos for smooth sliding */}
            <div className="logos">
              <Image src="/images/lightbox.svg" alt="Lightbox" width={167} height={48} />
              <Image src="/images/featherdev.svg" alt="FeatherDev" width={167} height={48} />
              <Image src="/images/spherule.svg" alt="Spherule" width={167} height={48} />
              <Image src="/images/globalbank.svg" alt="GlobalBank" width={167} height={48} />

              {/* Repeat logos to create seamless animation */}
              <Image src="/images/lightbox.svg" alt="Lightbox" width={167} height={48} />
              <Image src="/images/featherdev.svg" alt="FeatherDev" width={167} height={48} />
              <Image src="/images/spherule.svg" alt="Spherule" width={167} height={48} />
              <Image src="/images/globalbank.svg" alt="GlobalBank" width={167} height={48} />

              {/* Repeat logos to create seamless animation */}
              <Image src="/images/lightbox.svg" alt="Lightbox" width={167} height={48} />
              <Image src="/images/featherdev.svg" alt="FeatherDev" width={167} height={48} />
              <Image src="/images/spherule.svg" alt="Spherule" width={167} height={48} />
              <Image src="/images/globalbank.svg" alt="GlobalBank" width={167} height={48} />
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
