# Technical Documentation

## **Work Breakdown**

We developed the project by defining common guidelines for development. Each member of the group was able to touch on all aspects relating to the development. In particular:

|      Member       | Main focus                                            |
|:-----------------:| ----------------------------------------------------- |
|   Davide Carini   | Focus on DB modeling and component development |
| Daniele Casciani  |         |
| Riccardo Pestrin  |         |
| Antony Pascalino  |     Focus on component development and CSS styling       |

<br>

---

## **Technologies and Motivations**

- For the _server side_ development we have used **NodeJS with ??????????**.
- For the _hosting_ our application we have used **Heroku**. The website is accessible at [insideBO.herokuapp.com](https://insidebo.herokuapp.com/).
- Since the website is data-base driven, for the _database implementation_ we have used **PostgreeSQL**.

<br>

---

## **Best Practices Compliance**

During the development of the system, all principles of good practice were followed. In particular:

- Every relevant aspect of the code has been **highly commented** (html structure, components, server, database structure) in order to facilitate reading.
- All the principles of **accessibility** have been scrupulously followed. In particular, the W3C-WAI ?????????? standards were followed. Some of the measures adopted:
  - [x] Brief descriptions of non-text content (such as images) are provided
  - [x] Labels for form controls, input, and other user interface components are provided
  - [x] Headings, lists, input fields, and content structures are marked-up properly
  - [x] Sequences of information or instructions are independent of any presentation
  - [x] Default foreground, background color combinations and images provide sufficient contrast
  - [x] Images of text are completely avoided
  - [x] Pages are organized using descriptive section headings
  - [x] There is more than one way to find relevant pages within a set of web pages
  - [x] Users are informed about their current location within a set of related pages
  - [x] The purpose of links is evident
  - [x] Buttons, links, and other active components are large enough to make them easier to activate by touch

- The website has been developed with attention to **SEO ranking**. In addition to what is listed above, all pages have been provided with appropriate meta tags.
- Reusable and modular Nuxt components **????????**

> All the pages of the website have been analyzed with the following tools:
>
> - **??????WAVE??????**: no errors, warning or contrast error have been detected
> - **Google Lighthouse**: all Performance, Best Practices and Accessibility tests have been successfully passed with an average score of 100-95.

> **NOTICE: The performance score on some pages is negatively affected by them ???????????**.

[//]: # (Here include the image fo analysis tools for performance and accessibility)
**????????**

---

## **Responsiveness**

The entire website was developed with responsiveness in mind. Each component is therefore able to adapt and change its appearance based on the screen size of current device.  
Some of the most notable responisive adaptions are:
- The Header component, showing the complete navigation bar, is hidden and replaced by a burger menu on tight screen devices. (See more in the Components section **???METTERE LINK??**)
- The Carousel component, used to show the items in Punti di interesse, Eventi, Itinerari and Servizi sections, drastically changes its design based on the viewport of the current device allowing to browse the items using the most intuitive method for each device's screen. (See more in the Components section **???METTERE LINK??**)
- The ItineraryPath component used to show the points of interest belonging to a particular itinerary, is horizontally oriented on horizontally oriented screens, vertically oriented on vertically oriented screens. (See more in the Components section **???METTERE LINK??**)
- The font size of paragraphs and headers is always adaptive to the screen size, in order to allow a comfortable reading from the user.

Here are shown some graphical instances where is possible to look at the differences just explained. 

|                    Phone                    |                Computer                |
|:-------------------------------------------:|:--------------------------------------:|
|  <img src="./img/phone.png" height="200">   | <img src="./img/pc.png" height="300">  |
|  <img src="./img/phone1.png" height="200">  | <img src="./img/pc1.png" height="300"> |


<br>

---

## **Plugins**
??????????????

---

## **Components**

We have developed the components of the website trying to maximize their _reusability_ on the various pages. This, in addition to allowing _modularity_, also has benefits on the _usability_ of the system. In fact, the user views familiar components while browsing the website. 

## **_BaseButton_**

  A general purpose button, picking up the main colors of the website: red and white. On mouse hover the button is substituted with a version with white background.
  **Actual usage on the website:** as button for links to other sections of the website or to external links.

|  Prop   |   Type   | Note                                                       |
|:-------:|:--------:|:-----------------------------------------------------------|
| `Title` | `String` | The label shown inside the button, clarify its purpose     |
| `goTo`  | `String` | The link (internal or external) to which the button brings |

|      Method      | Parameter Type |                                Note                                 |
|:----------------:|:-------------------------------------------------------------------:|:-----------------------------------------------------------------------|
| `goToFunction()` |      `/`       |Triggered by _click_ event, bring to the path specified by goTo string |


  #### Example

    <baseButton title="Tutti gli eventi" goto="eventi"></baseButton>


| <img src="./img/baseButton.png" height="64"> | <img src="./img/baseButton1.png" height="64">  |
|:--------------------------------------------:|:----------------------------------------------:|
|                 Base button                  |              Base button on hover              |

***

<br>

- ## **_Breadcrumb_**

  A dynamic breadcrumb. The route to be shown is defined by ***?????????***. It shows at most the three main levels of the website: from the homepage, to one of the main section, to one of the item of such section.

|       Prop       |    Type    |  Default  | Note                                                                                                                                                                                                         |
|:----------------:|:----------:|:---------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  `defaultRoute`  |  `Array`   |   `[]`    | (Required) The default breadcrumb defined as an array of pairs (path,title). It's the route shown when no other alternative route is activated. E.g., `[{ title: 'Areas', path: '/areas' }]`                 |
|   `altRoutes`    |  `Array`   |   `[]`    | Array of alternative breadcrumbs . The alternative to be shown is at position 'route'. Each route is specified as an array of pairs (path, title). E.g., `[[{ title: 'Our Services', path: '/services' }]]`  |
|  `currentPage`   |  `String`  |   `""`    | Name of the current page. E.g., `Service XYZ`                                                                                                                                                                |

  #### Example

    <breadcrumb :default-route="[{ title: 'HOME', path: '/' },{ title: 'Eventi', path: '/eventi/' },]" :current-page="name"/>


| <img src="./img/breadcrumb.png" height="64"> |
|:--------------------------------------------:|
|         Breadcrumb of an event page          |
 

***

- ## **_Card_**

It is a component used in the pages of the single itmes (single events, point of interest, itineraries) to show the photos of the gallery section. It contains an image that is shown in its full size once clicked

| Note                                                                                                        |
|-------------------------------------------------------------------------------------------------------------|
| Since every gallery section has more than one photo, the component is always used through a v-for construct |

  #### Example

          < card
            v-for="(img, index) of imgArray"
            class="col-sm-2 m-1"
            :key="index"
            :img="`../Events/${img}`"
          />

| <img src="./img/card.png" height="64"> |
|:--------------------------------------:|
|    Cards in tha gallery of an event    |
 

***

- ## **_CardInfo_**

It is a component composed by an image, its caption and a button. Used mainly in the homepage of the website to briefly show some items. The button brings to the item's page.  
When the item is an event, it also shows in the caption the starting date and the location of the event.

| Note                                                                                                  |
|-------------------------------------------------------------------------------------------------------|
| Since in the homepage several cards are shown, the component is always used through a v-for construct |

  #### Example

          < cardInfo
            v-for="(poi, index) of poiList"
            class="col-sm-1 m-2"
            :key="`index-${index}`"
            :name="poi.name"
            :img="`../Poi/${poi.imgBackground}`"
            :id="poi.id"
            link="pois"
          />

|  <img src="./img/cardInfo.png" height="64">  | <img src="./img/cardInfo1.png" height="64"> |
|:--------------------------------------------:|:-------------------------------------------:|
| Point of interest Info-cards in the homepage |      Events Info-cards in the homepage      |
 

***

- ## **_CardService_**

It is a component composed by a title and three different lines of text. It is used in the service type pages to list the available services.   
The title is the service name and the three lines are respectively the address, the opening time, the phone number and the link to the service's website.

| Note                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------|
| Since several services are shown in the service type page, the service cards are always used through a v-for construct |

  #### Example

          <cardService
            v-for="(s, index) of serviceList"
            class="col-sm-1 m-2"
            :key="`index-${index}`"
            :name="s.name"
            :address="s.address"
            :opening_hours="s.opening_hours"
            :phone="s.phone_number"
            :website="s.website"
          />

| <img src="./img/CardService.png" height="128"> |
|:----------------------------------------------:|
|        Service cards of movie theaters        |
 

***
- 
- ## **_Carousel_**

The Carousel component, complementary with CarouselSlide component, is the major member of the main sections of the website.
It allows to browse all the items through either the click of the two buttons (prec and next) or through the implemented single scroll gesture.  
Noteworthy is its responsivness: other than adapt its size to the window, it drastically changes based on the viewport of 
the current device: on computers' browsers it shows an item per time allowing to browse all of them through single scroll gesture, 
buttons and clickable list (see also CarouselIndicator ***LINK TO COMPONENT*** component); on mobile devices, with a vertically oriented screen, 
it shows all the items in column allowing the user to browse them scrolling up and down with the intuitive scroll touch gesture, 
mainly used in most of the mobile oriented applications.


|  Method  | Parameter Type | Note                                                                                                 |
|:--------:|:-------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------|
| `prec()` |      `/`       | Triggered by _click_ event, changes the view of the current visible slide, showing the previous one. |
| `next()` |      `/`       | Triggered by _click_ event, changes the view of the current visible slide, showing the next one.     |
  
#### Example

          < carousel 
            class="carousel" 
            @next="next" 
            @prev="prev" 
          >

|    <img src="./img/carousel.png" width="256">    | <img src="./img/carousel1.png" height="150">   |
|:------------------------------------------------:|------------------------------------------------|
| Carousel component on horizontal oriented screen | Carousel component on vertical oriented screen |
 

***

- ## **_CarouselSlide_**

The CarouselSlide component, is needed to fulfill the purpose of the Carousel component. This component is actually the single slide of the carousel. 
As a slide, it is used including an image inside it enriched with the name of the item and a brief description appearing on hover.

|      Prop      | Note                                                                                                              |
|:--------------:|:------------------------------------------------------------------------------------------------------------------|
|    `index`     | The index that each slide has given to iterate them                                                               |
| `visibleSlide` | The index of the slide to show (they are shown once per time in large screen)                                     |
|      `id`      | The unique index that each slide has given in the server                                                          |
|     `name`     | The name of the category of slides shown in a precise carousel (eventi, pois, services...)                        |
|  `direction`   | The direction of scroll going from a slide to another: used to set the proper animation when scrolling up or down |

| Note                                                                                            |
|-------------------------------------------------------------------------------------------------|
| Since each carousel has several slides, the component are always used through a v-for construct |

#### Example

        < carousel-slide
          v-for="(poi, index) in poiList"
          :key="index"
          :index="index"
          :visibleSlide="visibleSlide"
          :id="poi.id"
          :name="'pois'"
          :direction="direction"
        >

| <img src="./img/carouselSlide.png" height="128"> |
|:------------------------------------------------:|
|        A single slide when hovering on it        |
 

***

- ## **_CarouselIndicator_**

This component provides a further method to browse the slide in a Carousel ***LINK***. It is a button linked to an items in a carousel: by clicking
it the component set the visible slide of the carousel on the one associated to it. It is needed when it is wanted to jump from a slide to another without scroll them one by one.
Obviously several Indicators are shown at the same time in column, in order to create a clickable list of items.

|      Prop      | Note                                                         |
|:--------------:|:-------------------------------------------------------------|
|    `index`     | The index that each slide has given to iterate them.         |
| `visibleSlide` | The index of the slide to show in the carousel once clicked. |
|   `selected`   | ***???????DON'T KNOW WHAT IS NEEEDED FOR????????***          |
|    `title`     | The name of the item shown once clicked.                     |

|               Method               |  Parameter Type   | Note                                                                                                            |
|:----------------------------------:|:-----------------:|:----------------------------------------------------------------------------------------------------------------|
|             `change()`             |        `/`        | Triggered by _click_ event, changes the visible slide in the carousel, showing the one linked to the Indicator. |
| `getTextColor(index,visibleSlide)` | `integer,integer` | Used to dynamically change the style, of the Indicators whose linked slide is set to visible in the carousel.   |
|  `getSymbol(index,visibleSlide)`   | `integer,integer` | Used to dynamically change the style, of the Indicators whose linked slide is set to visible in the carousel.   |

|Note                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------------|
| Since it used to create a list of all the items in the page, the component are always used through a v-for construct |

#### Example
        <carousel-indicator
            v-for="(poi, index) in poiList"
            :key="index"
            :index="index"
            :visibleSlide="visibleSlide"
            :title="poi.name"
            @change="change(index)"
        />

|                                     <img src="./img/carouselIndicator.png" height="128">                                     |
|:----------------------------------------------------------------------------------------------------------------------------:|
| A list of carousel indicators in events section<br/>(Festival della mortadella is the current visible slide in the carousel) |
 

***

  <br>
