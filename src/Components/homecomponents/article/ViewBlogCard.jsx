import React from "react";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

import img from "../../../assets/ArticleImages/chickenpox.jpg";
import img1 from "../../../assets/ArticleImages/Badbreath.jpg";
import img2 from "../../../assets/ArticleImages/microneedling.avif";
import img3 from "../../../assets/ArticleImages/Dental.jpg";
import img4 from "../../../assets/ArticleImages/Anger.jpg";
import img5 from "../../../assets/ArticleImages/Child.jpg";

const Data = [
  { 
    id: 1,
    title: "Why Should I Brush My Teeth?", 
    author: "Dr. Amit Kumar, Dentist", 
    description: "Why should I brush my teeth? This question is asked by almost every child every day...",
    tags: ["Oral Hygiene", "Dental Care", "Healthy Teeth"], 
    image: img3,
    likes: 76,
    
  },
  { id: 2, title: "Is your rage consuming you?", author: "HelpGuide.org", description: "Flying off the handle over trifles can be easy...", tags: [], image: img4, likes: 152 },
  { id: 3, title: "Train your child for a developing athlete", author: "Dr. Vishwas Virmani(PT)", description: "Developmental Windows or Sensitive Periods...", tags: ["Child Mental Development", "Everyday Fitness"], image: img5, likes: 7 },
  { id: 4, title: "4 Tips for Speedy Recovery from Chicken Pox", author: "Dr. Vandan H Kumar", description: "It's important to relieve/decrease the symptoms associated with chickenpox...", tags: ["Infection", "Flu"], image: img, likes: 74 },
  { id: 5, title: "How to Cure Bad Breath at Home", author: "Dr. Ushma K Kakkad", description: "Having bad breath can adversely affect your social life...", tags: ["Oral Hygiene", "Bad Breath", "Tooth Decay", "The Cure"], image: img1, likes: 3 },
  { id: 6, title: "Wish to turn back time on your scars?", author: "Women's Health", description: "As scary as needles can be, a few pokes can actually help you look more beautiful...", tags: [], image: img2, likes: 115 },
];

export default function ViewBlogCard() {
  const { id } = useParams();
  const post = Data.find((post) => post.id === Number(id));

  if (!post) {
    return <div className="text-center text-xl text-red-500 py-10">Post not found</div>;
  }

  return (
    <div className="w-full px-6 py-10 bg-gray-100 flex justify-center">
      <div className="w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        {post.image && <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />}
  
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900">{post.title}</h2>
          <p className="text-blue-500 font-medium mt-2">{post.author}</p>
  
          {post.id === 1 && (
            <div className="mt-6">
              <p className="text-blue-500 font-medium">Dentist</p>
              <div className="mt-4"><p className="mt-4 text-gray-700">
                Most people complain that dental treatment costs too much. But it is not 100% correct. The cost of treatment increases with complexity and severity. If we do dental treatment at preventive or initial stages, it costs very little and only requires one or two appointments.
              </p>

              <h3 className="font-bold text-lg mt-6">1. Bleeding Gums</h3>
              <p className="text-gray-700 mt-2">
                Bleeding gums are a sign of gum disease. If untreated, it can lead to bad breath, periodontitis, bone loss, tooth mobility, and more severe issues. Treatment in later stages becomes more complicated and expensive.
              </p>

              <h3 className="font-bold text-lg mt-6">2. Black Spot / Dental Cavity</h3>
              <p className="text-gray-700 mt-2">
                Cavity/Dental Caries mostly develop at an early age when teeth are new in the mouth. As the age of teeth increases, enamel remineralizes, and the incidence of cavity formation decreases. Experienced dentists can give you tips on how to maintain oral health.
              </p>

              <h3 className="font-bold text-lg mt-6">3. Dental Sensitivity</h3>
              <p className="text-gray-700 mt-2">
                Don’t neglect dental sensitivity, as it’s an early sign of a tooth problem. Sensitivity to hot and cold helps diagnose dental disease.
              </p>

              <h3 className="font-bold text-lg mt-6">4. Irregular and Malaligned Teeth</h3>
              <p className="text-gray-700 mt-2">
                This can lead to food lodgment, which causes subsequent dental issues. This issue can be corrected with dental braces or aligners.
              </p>

              <h3 className="font-bold text-lg mt-6">5. Missing Teeth</h3>
              <p className="text-gray-700 mt-2">
                Complete or partial missing teeth can cause movements and shifting of adjacent teeth, leading to digestion problems.
                Routine dental checkups and consultations with an expert dental surgeon are essential. Ask your dentist about brushing techniques, flossing, interdental brushes, fluoride therapy, and mouthwash.
              </p></div>
            </div>
          )}
          
          {post.id === 2 && (
            <div className="mt-6">
              <p className="text-blue-500 font-medium">Ms. Sadiqa Patel</p>
              <p className="text-blue-500 font-medium">Psychologist</p>
              <div className="mt-4">  <p className="mt-4 text-gray-700">
             You cannot change or control your emotions.  You can learn how to be with them, living peacefully with them, transmuting them (which means releasing them), and you can manage them, but you cannot control them. One of the major emotions is Anger. 

             Anger is a natural emotion that all of us experience. A mild form of anger may included is pleasure, irritation or dislike. When we react to criticism, threat or frustration, we may become angry and this is considered to be a healthy response. Anger may be a secondary response to feelings of sadness, loneliness and fear. When anger becomes full blown rage, judgment and thinking can be impaired. Anger management does not involve getting rid of anger, but using anger to enhance your life we can look the purposes of anger in a both positive and negative light.
              </p>

           

              <h3 className="font-bold text-lg mt-6"> “YOU WILL NOT BE PUNISHED FOR ANGER, YOU’LL BE PUNISHED BY YOUR ANGER”-By BUDDHA</h3>
              <p className="text-gray-700 mt-2">
              #selflove #emotionalintelligence#mindbodysoul #lifechoices #lifechanges #family #knowyourtruth #bewell#selfdevelopment #humility #motivation #authenticity #lifelessons#knowyourworth #lifelesson #inspired #energyhealing #anger #happiness#sadness #vibes #angermanagement #motivation #depression #mentalhealth#mindfulness #angerissues #counseling #angerproblem #therapy #TuesdayThoughts #digitalmarketing
              </p>
</div>
            </div>
          )}
            {post.id === 3 && (
            <div className="mt-6">
              <p className="text-blue-500 font-medium">Physiotherapist</p>
              <div className="mt-4">
              <h3 className="font-bold text-lg mt-6">
              Developmental Windows or Sensitive Periods</h3>
              <p className="text-gray-700 mt-2">
               It  is important to have a plan for training the developing athlete from a very young age that will progress them appropriately as they age. Piaget identified four distinct stages of development in children. The sensorimotor phase, the preoperational thought phase, the concrete operations phase (7 to 11 years), and the formal operations phase (beginning at 11 years). At the preoperational phase learning occurs via physical exploration rather than a cognitive approach. Cognitive perception begins to develop in the formal operations stage but it is more of a stimulus–response style. Once the formal operations phase is reached, a more systematic problem-solving approach begins to take hold.
              </p>

              <h3 className="font-bold text-lg mt-6">Developmental Kinesiologyy</h3>
              <p className="text-gray-700 mt-2">
              “Postural muscle activity is genetically pre-determined and occurs automatically in the course of CNS maturation….The quality of verticalization during the first year of life strongly influences the quality of body posture for the rest of a person’s life”. The stage from 2 to 7 years has been called the fundamental movement phase by Gallahue. In this stage the child explores, “a variety of stabilizing, locomotor and manipulative movements….” This is then followed by the specialized movement phase from 7 to 11 years where FMS are honed and progressed to incorporate more complex skills. A few commonly agreed upon developmental landmarks according to McMorris and Hale are as follows:

            • By 6 years of age, normal children are capable of jumping, catching, skipping, throwing, and balancing

            • At 6 years, a child can strike a stationary object but has difficulty with a moving object due to immature eye–hand and foot–eye coordination

            • Boys perform better than girls at most skills, except balance

            • Girls are more flexible than boys

            • Perceptual skills such as visual acuity and depth perception reach maturity around the age of 12 years

            • Physical development in 11- to 13-year-olds varies greatly

            • Children reach adolescence at different ages 1

            Sensitive periods are best defined as “windows of opportunity and vulnerability in the skill acquisition process”. In Chinese and Korean immigrants whose first exposure to English occurred between the ages of 3 and 39 years of age, it was shown that the ages between 3 and 7 were the most sensitive, so much so that their English speaking fluency was indistinguishable from native English speakers. Similarly, proficiency in high levels of fine motor skill necessary for music is best achieved if trained by age 7. For swimming the optimal or most efficient age to begin learning has been shown to be 5.5 years. Simonton reported that the greatest composers who started music lessons at a younger age took less time to hone their skills. In other words, the training was more efficient. The above insights should be tempered by research showing sensitive periods are not brief, sharply defined, or irreversible. Some confusion in the literature exists, because the terms critical period and sensitive period are both used. 

            Critical periods should narrowly be applied to developmental changes that occur in the neural circuitry underlying behavior and are more fixed. Sensitive periods refer to temporal phases where environmental input can have a potent effect on habitual behaviors. The question of when to train specific motor skills is a“holy grail” in the early training of youth athletes. However, according to Anderson et al. “our understanding of when children are best prepared to profit from specific experiences and how to create that preparation is poor.” Nonetheless, the authors state, “motor skill learning must ultimately be considered within a developmental context if it is to be fully understood.”
              </p>
</div>
            </div>
          )}
          {post.id === 4 && (
            <div className="mt-6">
              <p className="text-blue-500 font-medium">
              Pediatrician</p>
              <div className="mt-4">
              <h3 className="font-bold text-lg mt-6">Step 1:</h3>
              <p className="text-gray-700 mt-2">
              It's important to relieve/decrease the symptoms associated with chickenpox-like itching, fever, skin infections.

            Skin infections may occur due to blisters as well as due to continuous itching at the site leading to skin infection. Apply the antibacterial cream prescribed by your doctor. It can be alternated with calamine lotion application and warm baths at regular interval. Anti-itching medications (containing antihistaminics) will be prescribed by your doctor. After bath does not rub the body vigorously as this may burst the blisters to cause more pain, itching and secondary skin infection. Sneezing, coughing and mucous are highly contagious.
              </p>

              <h3 className="font-bold text-lg mt-6">Hand Wash:</h3>
              <p className="text-gray-700 mt-2">
              Hand washing limits the spread of the virus. Hands should be properly washed and nails trimmed short as this will decrease the chances of trauma and infection there in that can occur due to scratching. Personal hygiene of the patient as well as other members of the family is important. Avoid sharing cups, eating utensils, towels, bed linen and clothing with the infected person.  ·  
              </p>

              <h3 className="font-bold text-lg mt-6">Temperature Monitoring:</h3>
              <p className="text-gray-700 mt-2">
              Give paracetamol for fever( ≥100ºF) and headache. This should be followed with tepid sponging of the whole body (head to toe) with cotton cloth for at least 20 mins. An immediate bath will also bring the temperature down. Even after 1 hr if the fever does not resolve then consult your doctor for further medication. Keep cool because heat and sweat will make you itch more. ·   
              </p>

              <h3 className="font-bold text-lg mt-6">Medication:</h3>
              <p className="text-gray-700 mt-2">
              Do no use aspirin and aspirin-containing medicines from over the counter. Its usage may lead to side effects to your child. Plain paracetamol will relieve the fever and body ache associated with the viral disease. Consult your doctor if there is need to administer other medications for fever /skin infection /anti-viral infection. As it is a viral infection antibiotic does not have any role. It is only indicated if there is secondary skin/bacterial infection ·        
              </p></div>
            </div>
          )}
          {post.id === 5 && (
            <div className="mt-6">
              <p className="text-blue-500 font-medium">Dentist</p>
              <div className="mt-4"> <p className="mt-4 text-gray-700">
              
              Having bad breath can adversely affect your social life and can hamper your self-confidence. The circumstance of having bad breath is commonly known as ‘halitosis.’ The most common reasons are dental cavities, an encrusted tongue due to swelling or gum disease, etc. The lack of saliva in the mouth is also responsible for bad breath. Consumption of alcohol or regular smoking habits can also lead to bad breath.
                </p>
  
                <h3 className="font-bold text-lg mt-6">1. Fennel Seeds:</h3>
                <p className="text-gray-700 mt-2">
                Fennel seeds have antibacterial properties that help get rid of bacteria that cause bad breath. Chewing a tablespoon of fennel seeds will help refresh your breath as well as encourage the creation of saliva in your mouth. The antimicrobial effect in saliva averts bad breath.
                  
                </p>
  
                <h3 className="font-bold text-lg mt-6">2.Lemon Juice</h3>
                <p className="text-gray-700 mt-2">
                  Chewing some lemon or orange peel will clean up your mouth. The citric acid triggers saliva production thus preventing bad breath. You can also make a lemon wash by adding a tablespoon of lemon juice to one cup of water and cleansing your mouth with it.
                 
                </p>
  
                <h3 className="font-bold text-lg mt-6">3.Cinnamon</h3>
                <p className="text-gray-700 mt-2">
                
  
                      Cinnamic aldehyde is an essential oil originating from cinnamon that lessens the bacteria in your mouth and covers bad breath. Boil a teaspoon of cinnamon powder in water; add some bay leaves and cardamom seeds. Strain the fluid to use it as a mouth rinse twice a day.
                
                </p>
  </div>
            </div>
          )}
           {post.id === 6 && (
            <div className="mt-6">
              <p className="text-blue-500 font-medium">ACNE: OVERVIEW</p>
              <div className="mt-4">   <p className="text-gray-700 mt-2">
              Acne is the most common skin condition . Although it's common, accurate information about acne can be scarce. This can make it difficult to get clearer skin. The information here can help you understand acne and how to successfully treat it.

          Why treat acne?

          Myths about acne are as common as the skin problem. One common myth is that you have to let acne run its course.

          Dermatologists know that letting acne run its course is not always the best advice
              </p>

              <h3 className="font-bold text-lg mt-6">Here's why:</h3>
              <p className="text-gray-700 mt-2">
              Without treatment, dark spots and permanent scars can appear on the skin as acne clears.
        Treating acne often boosts a person’s self-esteem.
        Many effective treatments are available.
              </p>

              <h3 className="font-bold text-lg mt-6">ACNE: SIGNS AND SYMPTOMS</h3>
              <p className="text-gray-700 mt-2">
              Many people think that acne is just pimples. But a person who has acne can have any of these blemishes:

            Blackheads.
            Whiteheads.
            Papules.
                Pustules 
                Cysts.
                Nodules.
                Acne can appear on the back, chest, neck, shoulders, upper arms and buttocks.

                Acne symptoms

                Acne can cause more than blemishes. Studies show that people who have acne can have:
                
              </p></div>
            </div>
          )}
  
          <p className="text-gray-600 mt-4 text-lg">{post.description}</p>
  
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, i) => (
              <span key={i} className="bg-blue-200 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
  
          <div className="mt-6 flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-500 text-lg">
              <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
              <span>{post.likes}</span>
            </div>
            <div className="flex gap-6 text-gray-600 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaEnvelope className="cursor-pointer hover:text-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
