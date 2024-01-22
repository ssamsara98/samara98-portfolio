'use client';
import {
  Box,
  Button,
  Container,
  ContainerProps,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaDollyFlatbed,
  FaDribbble,
  FaFacebook,
  FaBars,
  FaHandHoldingUsd,
  FaHeadset,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaTwitter,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import heroImg from '~/assets/inwood/hero.jpg';
import productBgImg from '~/assets/inwood/product-background.png';
import inwoodLogoImg from '~/assets/inwood/inwood-logo.png';
import './inwood.scss';
import { categories, footerLinks, ourCreations, products, specialPacakges, testimonials } from './data';

export const InContainer = (props: ContainerProps) => {
  return (
    <Container
      maxW={{
        base: 'full',
        tablet: '768px',
        laptop: '1280px',
        desktop: '1920px',
      }}
      px={{
        base: '2.5',
        tablet: '5',
        laptop: '10',
        desktop: '36',
      }}
      {...props}
    ></Container>
  );
};

export default function InWoodClient() {
  return (
    <>
      {/* Hero */}
      <Flex
        minH={'100vh'}
        borderRadius={'3xl'}
        bgColor={'gray.300'}
        bgImage={heroImg.src}
        bgSize={'cover'}
        bgPosition={'center'}
        align={'center'}
        fontFamily={'inwoodBody'}
      >
        {/* Hero */}
        <InContainer>
          <Flex color={'inwood.primaryLight'} direction={'column'} gap={'14'} fontSize={'lg'}>
            <Flex direction={'column'} gap={{ base: '4', desktop: '14' }}>
              <Heading fontSize={'6xl'} fontFamily={'inwoodHeading'} color={'inwood.primaryDark'}>
                Exclusive Deals of Furniture Collection
              </Heading>
              <Text>Explore different categories. Find the best deals.</Text>
            </Flex>
            <Box textAlign={{ base: 'center', tablet: 'left' }}>
              <Button colorScheme="teal" bgColor={'inwood.primaryLight'} size={'lg'}>
                Shop Now
              </Button>
            </Box>
          </Flex>
        </InContainer>
      </Flex>

      {/* Category */}
      <InContainer py={{ base: '20', tablet: '24' }}>
        <Box mb={'16'}>
          <Heading
            fontFamily={'inwoodHeading'}
            fontSize={{ base: '3xl', tablet: '4xl' }}
            color={'inwood.primaryDark'}
            mb={'8'}
          >
            Explore by Category
          </Heading>

          <Flex justify={'space-between'} gap={'8'}>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={FaSearch} />
              </InputLeftAddon>
              <Input />
            </InputGroup>
            <IconButton aria-label="category-menu" icon={<Icon as={FaBars} />} display={{ tablet: 'none' }} />
          </Flex>
        </Box>

        <SimpleGrid columns={{ base: 1, tablet: 2 }} gap={'5'}>
          {categories.map((cat, idx) => (
            <Box
              key={idx}
              bgColor={'inwood.gray'}
              bgImage={cat.image ? cat.image : ''}
              bgPosition={'center'}
              bgSize={'cover'}
              color={'white'}
              position={'relative'}
              py={'28'}
              h={{ base: '200px', tablet: '240px', desktop: '345px' }}
              rounded={'xl'}
              className="category"
              overflow={'auto'}
            >
              <Flex
                justify={'center'}
                align={'center'}
                w={'full'}
                h={'full'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                sx={{
                  '.category:hover &': {
                    bgColor: 'black',
                    opacity: '0.5',
                  },
                }}
              ></Flex>
              <Flex
                justify={'center'}
                align={'center'}
                w={'full'}
                h={'full'}
                position={'absolute'}
                top={'0'}
                left={'0'}
              >
                <Text fontSize={{ base: '4xl', tablet: '5xl' }} fontFamily={'inwoodHeading'}>
                  {cat.name}
                </Text>
              </Flex>
              <Flex
                w={'full'}
                h={'full'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                align={'flex-end'}
                justify={'space-around'}
                py={'8'}
                display={'none'}
                sx={{
                  '.category:hover &': { display: 'flex' },
                }}
              >
                <Button size={'lg'} colorScheme="teal" bgColor={'gray.200'} color={'inwood.primaryLight'}>
                  Explore
                </Button>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </InContainer>

      {/* Products */}
      <Box
        py={{ base: '20', tablet: '24' }}
        color={'inwood.primaryDark'}
        bgImg={productBgImg.src}
        bgRepeat={'no-repeat'}
        bgSize={'contain'}
      >
        <Heading fontFamily={'inwoodHeading'} fontSize={{ base: '3xl', tablet: '6xl' }} textAlign={'center'}>
          Popular Products
        </Heading>

        <Swiper
          id="product-swiper"
          modules={[Navigation]}
          navigation={{
            enabled: true,
            prevEl: '#product-swiper-prev',
            nextEl: '#product-swiper-next',
          }}
          slidesPerView={'auto'}
          spaceBetween={32}
          // slidesOffsetBefore={144}
          // slidesOffsetAfter={144}
          className="my-16"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              <Box px={'10'} py={{ base: '14', tablet: '20' }}>
                {/* <Box textAlign={'center'} mb={'10'}> */}
                <Image
                  src={product.image.src}
                  alt={product.image.src}
                  width={'full'}
                  h={{ base: '127px', tablet: '250px' }}
                  objectFit={'contain'}
                  mb={'9'}
                />
                {/* </Box> */}

                <Flex direction={'column'} gap={'5'}>
                  <Text fontSize={{ base: 'lg', tablet: '2xl' }} fontWeight={'bold'}>
                    {product.name}
                  </Text>
                  <Text fontSize={'lg'}>{product.type}</Text>
                  <Text fontSize={'2xl'}>{product.price}</Text>
                </Flex>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </Box> */}

        <InContainer>
          {/* <Divider /> */}

          <Flex justify={'flex-end'} gap={'8'} display={{ base: 'none', desktop: 'flex' }}>
            <IconButton
              id="product-swiper-prev"
              aria-label="product-swiper-prev"
              icon={<Icon as={FaChevronLeft} />}
              size={'lg'}
              colorScheme="teal"
            />
            <IconButton
              id="product-swiper-next"
              aria-label="product-swiper-next"
              icon={<Icon as={FaChevronRight} />}
              size={'lg'}
              colorScheme="teal"
            />
          </Flex>

          <Box textAlign={'center'}>
            <Button colorScheme="teal" size={'lg'} rightIcon={<Icon as={FaArrowRight} />}>
              Explore all items
            </Button>
          </Box>
        </InContainer>
      </Box>

      {/* special package */}
      <InContainer py={{ base: '20', tablet: '24' }}>
        <Heading fontFamily={'inwoodHeading'} fontSize={{ base: '3xl', tablet: '6xl' }} textAlign={'center'} mb={'24'}>
          Special Package
        </Heading>

        <Flex
          direction={{ base: 'column', laptop: 'row' }}
          rowGap={{ base: '8' }}
          columnGap={{ laptop: '5', desktop: '24' }}
        >
          {/* video */}
          <Flex direction={'column'} flex={'1'} gap={'8'} justify={'space-between'}>
            <Image
              h={{ base: '280px', tablet: '395px', desktop: '550px' }}
              bgColor={'inwood.gray'}
              borderRadius={'3xl'}
              overflow={'hidden'}
              src="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg"
              alt="https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg"
              objectFit={'cover'}
            />

            <Flex display={{ base: 'none', desktop: 'flex' }} justify={'space-between'} align={'flex-start'}>
              <Box>
                <Text fontSize={{ base: '2xl' }}>Larkin Wood Full Set</Text>
                <Text fontSize={{ base: '3xl' }} color={'orange'}>
                  <Icon as={FaStar} />
                  <Icon as={FaStar} />
                  <Icon as={FaStar} />
                  <Icon as={FaStar} />
                  <Icon as={FaStar} />
                </Text>
                <Text fontSize={{ base: '3xl' }} fontWeight={'bold'}>
                  $729.99
                </Text>
              </Box>

              <Button rightIcon={<Icon as={FaShoppingCart} fontSize={'2xl'} />} size={'lg'} colorScheme="teal">
                Add to cart
              </Button>
            </Flex>
          </Flex>

          {/* description */}
          <Flex direction={{ base: 'column' }} rowGap={{ base: '8' }} flex={'1'}>
            <Box display={{ desktop: 'none' }}>
              <Text fontSize={{ base: '2xl' }}>Larkin Wood Full Set</Text>
              <Text fontSize={{ base: '3xl' }} color={'orange'}>
                <Icon as={FaStar} />
                <Icon as={FaStar} />
                <Icon as={FaStar} />
                <Icon as={FaStar} />
                <Icon as={FaStar} />
              </Text>
              <Text fontSize={{ base: '3xl' }} fontWeight={'bold'}>
                $729.99
              </Text>

              <Button rightIcon={<Icon as={FaShoppingCart} fontSize={'2xl'} />} size={'lg'} mt={'8'} colorScheme="teal">
                Add to cart
              </Button>
            </Box>

            <Flex direction={'column'} gap={'6'}>
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Description
              </Text>
              <Text fontSize={'lg'}>
                Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast
                Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the
                best experience.
              </Text>
              <Text>
                See More <Icon as={FaChevronDown} />
              </Text>
            </Flex>

            <Flex
              display={{ base: 'none', desktop: 'flex' }}
              gap={'8'}
              direction={'column'}
              flex={'1'}
              // height={'full'}
              overflow={'auto'}
            >
              {/* box 1 */}
              <Flex minH={'180px'} gap={'4%'}>
                <Image
                  rounded={'lg'}
                  bgColor={'inwood.gray'}
                  w={'36%'}
                  src={specialPacakges[0].image}
                  alt={specialPacakges[0].image}
                  objectFit={'cover'}
                />
                <Box rounded={'lg'} bgColor={'cyan.100'} flex={'1'} w={'60%'} px={'6'} py={'8'}>
                  <Flex fontSize={'2xl'} justify={'space-between'}>
                    <Text>{specialPacakges[0].name}</Text>
                    <Text>{specialPacakges[0].price}</Text>
                  </Flex>
                  <Text fontSize={{ base: '3xl' }} color={'orange'}>
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                  </Text>
                  <Link href="#">See Details...</Link>
                </Box>
              </Flex>
              {/* box2 */}
              <Box position={'relative'} w={'full'} overflow={'auto'} h={'320px'}>
                <Flex w={'90%'} direction={'column'} gap={'5'} position={'absolute'}>
                  {specialPacakges
                    .concat(specialPacakges)
                    .filter((_, index) => index !== 0)
                    .map((packagee, idx) => {
                      // if (idx === 0) return null;
                      return (
                        <Flex key={idx} gap={'4%'}>
                          <Image
                            minH={'150px'}
                            bgColor={'inwood.gray'}
                            rounded={'md'}
                            w={'36%'}
                            src={packagee.image}
                            alt={packagee.image}
                            objectFit={'cover'}
                          />
                          <Box w={'60%'}>
                            <Flex fontSize={'2xl'} justify={'space-between'}>
                              <Text>{packagee.name}</Text>
                              <Text>{packagee.price}</Text>
                            </Flex>
                            <Text>{packagee.content}</Text>
                            <Text fontSize={{ base: '3xl' }} color={'orange'}>
                              <Icon as={FaStar} />
                              <Icon as={FaStar} />
                              <Icon as={FaStar} />
                              <Icon as={FaStar} />
                              <Icon as={FaStar} />
                            </Text>
                            <Link href="#">
                              See More <Icon as={FaChevronDown} />
                            </Link>
                          </Box>
                        </Flex>
                      );
                    })}
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Swiper
          id="special-package-swiper"
          className="hidden tablet:block desktop:hidden mt-24"
          slidesPerView={'auto'}
          spaceBetween={48}
        >
          {specialPacakges.map((packagee, idx) => (
            <SwiperSlide key={idx} className="lg:w-4/5">
              <Flex minH={'180px'} gap={'4%'}>
                <Image
                  w={'32%'}
                  bgColor={'inwood.gray'}
                  rounded={'lg'}
                  src={packagee.image}
                  alt={packagee.image}
                  objectFit={'cover'}
                />

                <Flex
                  direction={'column'}
                  gap={'6'}
                  color={'inwood.primaryDark'}
                  w={'64%'}
                  bgColor={'cyan.100'}
                  rounded={'lg'}
                  px={'6'}
                  py={'8'}
                >
                  <Flex fontSize={'2xl'} justify={'space-between'}>
                    <Text>{packagee.name}</Text>
                    <Text>{packagee.price}</Text>
                  </Flex>
                  <Text fontSize={{ base: '3xl' }} color={'orange'}>
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                    <Icon as={FaStar} />
                  </Text>
                  <Link href="#">See Details...</Link>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </InContainer>

      {/* Our Creation */}
      <Flex
        // direction={{ base: 'column', tablet: 'row' }}
        gap={{ base: '2', tablet: '8' }}
        align={'center'}
        py={{ base: '20', tablet: '24' }}
      >
        <Box
          w={{ base: '175px', tablet: '400px', desktop: '575px' }}
          bgColor={'inwood.primaryDark'}
          color={'white'}
          px={{ base: '4', tablet: '5', laptop: '10' }}
          py={{ base: '12', tablet: '32' }}
          pl={{ desktop: '36' }}
          pr={{ desktop: '24' }}
          roundedTopRight={'lg'}
          roundedBottomRight={'lg'}
        >
          <Heading fontSize={{ base: '2xl', tablet: '4xl' }} fontFamily={'inwoodHeading'}>
            Our <br /> Own Creation
          </Heading>
          <Text fontSize={{ base: 'xl', tablet: '2xl' }}>Designed in our studio</Text>
        </Box>

        <Box flex={'1'} overflow={'auto'}>
          <Swiper
            id="our-creation-swiper"
            slidesPerView={'auto'}
            spaceBetween={24}
            // slidesOffsetBefore={144}
            // slidesOffsetAfter={144}
          >
            {ourCreations.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  h={{ base: '275px', tablet: '500px' }}
                  bgColor={'inwood.gray'}
                  src={item.image}
                  alt={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>

      {/* Benefits */}
      <Flex
        bgColor={'inwood.blue'}
        px={{ base: '4', tablet: '5', laptop: '10px', desktop: '36' }}
        py={{ base: '20', tablet: '24' }}
        justify={'space-between'}
        direction={'column'}
        align={'center'}
        gap={'24'}
      >
        <Heading fontFamily={'inwoodHeading'} fontWeight={'bold'} fontSize={'6xl'} textAlign={'center'}>
          Benefits for your expediency
        </Heading>

        <Flex
          justify={'space-between'}
          alignSelf={'stretch'}
          direction={{ base: 'column', tablet: 'row' }}
          columnGap={{ tablet: '16', laptop: '24', desktop: '52' }}
          rowGap={'16'}
        >
          <Flex direction={'column'} align={'center'} gap={{ base: '8', tablet: '12' }} flex={'1'} textAlign={'center'}>
            <IconButton
              icon={<Icon as={FaHandHoldingUsd} fontSize={'6xl'} />}
              aria-label="FaHandHoldingUsd"
              boxSize={'24'}
              bgColor={'inwood.purple'}
              color={'inwood.primaryLight'}
              rounded={'2xl'}
            />
            <Text fontFamily={'inwoodHeading'} fontWeight={'bold'} fontSize={'3xl'}>
              Payment Method
            </Text>
            <Text fontSize={'2xl'}>We offer flexible payment options, to make easier.</Text>
          </Flex>
          <Flex direction={'column'} align={'center'} gap={{ base: '8', tablet: '12' }} flex={'1'} textAlign={'center'}>
            <IconButton
              icon={<Icon as={FaDollyFlatbed} fontSize={'6xl'} />}
              aria-label="FaHandHoldingUsd"
              boxSize={'24'}
              bgColor={'inwood.yellow'}
              color={'inwood.primaryLight'}
              rounded={'2xl'}
            />
            <Text fontFamily={'inwoodHeading'} fontWeight={'bold'} fontSize={'3xl'}>
              Return policy
            </Text>
            <Text fontSize={'2xl'}>You can return a product within 30 days.</Text>
          </Flex>
          <Flex direction={'column'} align={'center'} gap={{ base: '8', tablet: '12' }} flex={'1'} textAlign={'center'}>
            <IconButton
              icon={<Icon as={FaHeadset} fontSize={'6xl'} />}
              aria-label="FaHandHoldingUsd"
              boxSize={'24'}
              bgColor={'inwood.green'}
              color={'inwood.primaryLight'}
              rounded={'2xl'}
            />
            <Text fontFamily={'inwoodHeading'} fontWeight={'bold'} fontSize={'3xl'}>
              Customer Support
            </Text>
            <Text fontSize={'2xl'}>Our customer support is 24/7.</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Testimonials */}
      <Box py={{ base: '20', tablet: '24' }} px={{ base: '4', tablet: '5', laptop: '10' }}>
        <Flex direction={'column'} gap={'9'} textAlign={'center'}>
          <Heading fontFamily={'inwoodHeading'} fontWeight={'bold'} fontSize={'6xl'}>
            Testimonials
          </Heading>
          <Text fontSize={'3xl'}>Over 15,000 happy customers.</Text>
        </Flex>

        <Box
          py={{ base: '20', tablet: '24' }}
          position={'relative'}
          _before={{
            content: `"“"`,
            position: 'absolute',
            fontFamily: 'inwoodHeading',
            fontSize: '300px',
            color: 'inwood.blue',
            // lineHeight:{'none'},
            top: '0',
            left: '0',
            zIndex: '2',
            transform: 'translate(-30%, -40%)',
            my: '24',
          }}
        >
          {/* <Text
            position={'absolute'}
            fontFamily={'inwoodHeading'}
            fontSize={'300px'}
            // lineHeight={'none'}
            top={'0'}
            left={'0'}
            zIndex={'2'}
            transform={'translate(-50%, -35%)'}
            my={'24'}
          >
            “
          </Text> */}
          <Swiper id="testimonials-swiper">
            {testimonials.map((testimoni, idx) => (
              <SwiperSlide key={idx}>
                <Flex direction={{ base: 'column', tablet: 'row' }} gap={'8'}>
                  <Image
                    rounded={'2xl'}
                    bgColor={'inwood.gray'}
                    boxSize={{ base: '280px', tablet: '460px' }}
                    flexShrink={'0'}
                    position={'relative'}
                    // _before={{
                    //   content: `"“"`,
                    //   fontSize: '300px',
                    //   fontFamily: 'inwoodHeading',
                    //   position: 'absolute',
                    //   top: '0',
                    //   left: '0',
                    //   transform: 'translate(-50%, -35%)',
                    //   color: 'inwood.blue',
                    // }}
                    src={testimoni.image}
                    alt={testimoni.image}
                    objectFit={'cover'}
                  >
                    {/* <Text
                      position={'absolute'}
                      fontFamily={'inwoodHeading'}
                      fontSize={'200px'}
                      lineHeight={'none'}
                      top={0}
                      left={0}
                    >
                      “
                    </Text> */}
                  </Image>
                  <Box color={'inwood.primaryDark'}>
                    <Text fontSize={'lg'} mb={'16'}>
                      {testimoni.content}
                    </Text>

                    <Text fontSize={'2xl'} fontWeight={'bold'}>
                      {testimoni.name}
                    </Text>
                    <Text fontSize={'2xl'}>{testimoni.position}</Text>
                  </Box>
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Newsletter */}
      <Flex pt={{ base: '20', tablet: '24' }} direction={{ base: 'column', laptop: 'row' }} flexGrow={'auto'}>
        <Image
          bgColor={'inwood.gray'}
          h={{ base: '280px', tablet: '600px' }}
          flex={'1'}
          src="https://img.freepik.com/premium-photo/image-modern-domestic-room-with-armchair-bookcase-house_249974-2616.jpg"
          alt="https://img.freepik.com/premium-photo/image-modern-domestic-room-with-armchair-bookcase-house_249974-2616.jpg"
          objectFit={'cover'}
        />
        <Flex
          bgColor={'inwood.green'}
          flex={'1'}
          direction={'column'}
          gap={'10'}
          px={{ base: '4', tablet: '10', desktop: '32' }}
          py={{ base: '20', tablet: '24' }}
        >
          <Box>
            <Text fontFamily={'inwoodHeading'} fontSize={'6xl'} mb={'8'}>
              Join Our <br />
              <Box as="span" fontWeight={'bold'}>
                Newsletter
              </Box>
            </Text>
            <Text>Receive exclusive deals, discounts and many offers.</Text>
          </Box>
          <Box>
            <Input variant={'flushed'} placeholder="Enter Your Email" />
          </Box>
          <Box>
            <Button colorScheme="teal" size={'lg'}>
              Subcribe
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex
        px={{ base: '4', tablet: '5', laptop: '10', desktop: '36' }}
        py={{ base: '20', laptop: '24' }}
        color={'inwood.primaryDark'}
        direction={{ base: 'column', laptop: 'row' }}
        rowGap={'24'}
        columnGap={{ tablet: '14', desktop: '56' }}
        // justify={'space-between'}
      >
        <Flex gap={'6'} direction={'column'}>
          <Box>
            <Image src={inwoodLogoImg.src} alt={inwoodLogoImg.src} h={'10'} />
          </Box>
          <Flex gap={'8'} fontSize={'3xl'}>
            <Icon as={FaFacebook} />
            <Icon as={FaInstagram} />
            <Icon as={FaLinkedin} />
            <Icon as={FaDribbble} />
            <Icon as={FaTwitter} />
          </Flex>
          <Flex direction={'column'}>
            <Text fontWeight={'bold'}>Address</Text>
            <Text>
              +123 654 987 877 <br />
              The Bronx, NY <br />
              14568, USA
            </Text>
          </Flex>
        </Flex>

        <Flex
          rowGap={'24'}
          // columnGap={{ tablet: '24', laptop: '12',  }}
          flexWrap={'wrap'}
          flex={'1'}
          fontSize={'lg'}
        >
          {footerLinks.map((footer, idx) => (
            <Flex key={idx} direction={'column'} rowGap={'8'} w={{ base: '50%', laptop: '25%' }}>
              <Text fontWeight={'bold'}>{footer.title}</Text>
              <Box>
                {footer.links.map((link, idx) => (
                  <Text key={idx}>{link.name}</Text>
                ))}
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
