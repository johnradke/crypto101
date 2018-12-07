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
X Y Z A B C D E F G H I J K L M N O P Q R S T U V W
```

So let's say me and Ms. Raidbard know beforehand that we'll always use a Caesar cipher and
our secret key is 3. If my message is THE PARTY STARTS AT NOON, I *encrypt* it like this

```
T H E   P A R T Y   S T A R T S   A T   N O O N
Q E B   M X O Q V   P Q X O Q P   X Q   K L L K
```
So I send Ms. Raidbard this message. Now Ms. Raidbard needs to *DEcrypt* it.

**(Erase the plaintext)**

She knows that it's a Caesar cipher and the secret
key is three, so she just does the same process, only backwards:

```
Q E B   M X O Q V   P Q X O Q P   X Q   K L L K
T H E   P A R T Y   S T A R T S   A T   N O O N
```

-------

* Caesar cipher is a type of *substitution cipher*
* Can easily crack a Caesar cipher because there's only 25 different keys
* Even with pen and paper you can try out all 25 options in just a few minutes
* Another kind is a *keyword* cipher
* In this case, the key is just a word, like ZEBRAS

```
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Z E B R A S C D F G H I J K L M N O P Q T U V W X Y
```

* The best substitution cipher is a totally random one
* **(do example on board)**
* The key is very long and hard to remember

-------

Another kind of cipher is a **Caesar box cipher**. Let's say we have the same message. I
*encrypt* it by first writing in a box like this:

```
T R A T
H T R N
E Y T O
P S S O
A T A N
```

Now I just write the letters left-to-right:

TRAT HTRN EYTO PSSO ATAN

To *decrypt* it, Ms. Raidbard can just do the same thing I did:

```
T H E P A
R T Y S T
A R T S A
T N O O N
```

to get THE PARTY STARTS AT NOON

------

ACTIVITY

--------

Bonus stuff:

* Important for computer programmers to understand how ciphers like this work
* Even more important, we need to know how to *crack* them
* *Cracking* means given an encrypted message without the encryption key, how
do you get the original message out?
* Even those of us who consider ourselves "the good guys" need to know how to
do it so that we can design cryptography that's really hard to crack
* One really cool kind of cryptography we use every day is called *assymmetric* encryption
* That's where you use one key to encrypt and a *different* one to decrypt
* I give the public key out to everyone in the world, and keep the private one very secret
