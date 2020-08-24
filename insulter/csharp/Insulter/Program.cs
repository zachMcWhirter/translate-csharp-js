using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace Insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> insults = new List<string>
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?",
                "Your mom sucks eggs",
                "I bet you wipe back to front",
                "What's wrong with your face?"
            };
            int ListOfInsults = insults.Count();

            List<int> RandomInsultList = new List<int>();
            while (RandomInsultList.Count < 3)
            {
                int candidate = new Random().Next(0, insults.Count);
                if (!RandomInsultList.Contains(candidate))
                {
                    RandomInsultList.Add(candidate);
                }
            }
            // int RandomIndex = new Random().Next(0, ListOfInsults - 1);
            for (int i = 0; i < 3; i++)
            {
                int index = RandomInsultList[i];
                Console.WriteLine(insults[index]);
            }
        }
    }
}