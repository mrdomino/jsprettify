#!/usr/bin/env python

# Copyright 2010 Steven Dee. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os

# Closure library directory relative to project root.
closuredir = '../closure-library/closure/'
# Project directory relative to the location of base.js (see below.)
projdir = '../../../jsprettify/'

# Per erik.arvidsson@gmail.com:
# > It is a bit tricky to get the paths correct but I found that running
# > the script from the same directory as base.js works for me.
# > Something like:
# >
# > ../bin/calcdeps.py -o deps -p ../../../test/ > ../../../test/deps.js
os.chdir(closuredir + 'goog/')
os.system('../bin/calcdeps.py -o deps -p ' + projdir + ' > ' + projdir + 'deps.js')
