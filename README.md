# crypto101
Intro to Cryptography for 5th graders

* John Radke
* Work at Quad/Graphics
* We print books and magazines

-----

* A big part of any computer programmer's job is to deal with lots of information
* A lot of that information travels over computer networks
* **What is a network?**
  * Any time you have two or more computers talking to each other, it's a network
  * The Internet is the biggest network of all
  * Five years ago, there were almost 9 billion devices connected to the Internet
* On a big network, not every device is hooked up to every other device
* Instead they form a *web*
* This means messages need to go between several devices
* And so message can be read by any of the devices in between
* **What kinds of things should be kept secret?**
  * Medical information
  * Money information

-----

Let's say I'm planning a surprise birthday party for Daisy and I want to send a message to
Ms. Raidbard about it and I want to make sure Daisy doesn't get the message on her phone. I
also want to make sure Eddie doesn't hear about it because he doesn't like Daisy and he'll
try to come to the party and pop all the balloons and eat all the cake.

The best tool to use is called **cryptography** which comes from the Greek:
* **kryptos** meaning *hidden*
* **graphia** meaning *writing*

I can use a type of cryptography called a *Caesar cipher* because the Roman emperor Caesar
used to use it to send messages to his military generals.

For a Caesar cipher, I just move the alphabet a certain number of letters. So for a Caesar
cipher with a key of 3, my alphabet looks like this:

```
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
```

