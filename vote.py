#!/usr/bin/python
import time
import random
import string
import requests
import sys

while True:
	print "Start : %s" % time.ctime()
	openid = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for _ in range(28))
	print openid
	r = requests.post('http://17070.aliyinba.com/Selection/SavaSurvey.ashx', data = {"VoteId": 209, "OpenId": openid, "ItemId":3949})
	print r.text
	print "End : %s" % time.ctime()
	timeSec = random.randint(0,60);
	print "sleep %s" % timeSec
	time.sleep(timeSec)
	sys.stdout.flush()